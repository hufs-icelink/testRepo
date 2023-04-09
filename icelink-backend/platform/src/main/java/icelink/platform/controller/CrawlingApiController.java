package icelink.platform.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;

@CrossOrigin("*")
@RestController
public class CrawlingApiController {
    @GetMapping("/member/github")
    public String crawlingGithub(HttpServletRequest request) throws IOException {

        HttpSession session = request.getSession();
        String gitUserId = (String) session.getAttribute("githubId");

        String gitUrl = "https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/main/README.md";

        Document document;
        try { // branch 이름이 main 일 때
            document = Jsoup.connect(gitUrl).get();
        }
        catch (HttpStatusException e){ // branch 이름이 master 일 때
            document = Jsoup.connect("https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/master/README.md").get();
        }

        return document.toString();
    }
    @GetMapping("/member/velog")
    public String crawlingVelog(HttpServletRequest request) throws IOException {

        HttpSession session = request.getSession();
        String velogUserId = (String) session.getAttribute("velogId");

        StringBuilder sb = new StringBuilder();
//        sb.append("<p> velog 작성 리스트 </p>");

        String velogUrl = "https://velog.io/@" + velogUserId + "/series/Python";;

        Document document = Jsoup.connect(velogUrl).get();

        Elements tagA = document.select("a");

        int count = 0;
        ArrayList<String> url_list = new ArrayList<>();

        for (Element element : tagA) {

            String tempElement = element.attr("href").toString();
            if (tempElement.contains(velogUserId + "/")
                    && !tempElement.contains("series")
                    && !tempElement.contains("about")
            ) {
                count++;
                if (count % 2 == 1) {
                    url_list.add("https://velog.io"+tempElement);
                }
            }
        }


        for(int i = 0; i < url_list.size(); i++) {
            document = Jsoup.connect(url_list.get(i)).get();
            sb.append(document.text() + "\n");
        }

        return sb.toString();
    }


    @GetMapping("/member/tistory")
    public String crawlingTistory(HttpServletRequest request) throws IOException {

        StringBuilder sb = new StringBuilder();

        HttpSession session = request.getSession();
        String tistoryUserId = (String) session.getAttribute("tistoryId");

        ArrayList<Element> url_list = new ArrayList<>();
        ArrayList<String> duplicated_list = new ArrayList<>();

        String tistoryUrl_origin = "https://" + tistoryUserId + ".tistory.com";

        /*
        <a href="/?page=" 으로 페이지를 이동하면서 다 찾아줘야 할 듯
        현재는 첫번째 페이지에 한해서만 나오는 중
        */
        int page_count = 1;
        while(page_count <= 10) {
            String tistoryUrl = tistoryUrl_origin + "/?page=" + String.valueOf(page_count);
            System.out.println("tistory Url is : " + tistoryUrl);
            Document document = Jsoup.connect(tistoryUrl).get();

            Elements tagA = document.select("a");


            for (Element element : tagA) {
                String tempElement = element.attr("href").toString();
                if (tempElement.contains("category") || tempElement.contains("github") || tempElement.contains("page")
                        || tempElement.contains("archive") || tempElement.contains("http") || tempElement.contains("tag") ||
                        tempElement.contains("#") || tempElement.equals("") || tempElement.equals("/")
                ) {
                    continue;
                }

                if(element.text().contains("html")) {
                    System.out.println(element);
                }

                if(!duplicated_list.contains(tempElement)) {
                    duplicated_list.add(tempElement);
                    url_list.add(element);
                }
            }

            page_count += 1;
        }


        for (int i = 0; i < url_list.size(); i++) {

            sb.append("<p><a href=" + tistoryUrl_origin + url_list.get(i).attr("href") + ">"
                    + (i+1) + "번째." + url_list.get(i).text()
                    + "</p>");
        }


        return sb.toString();
    }


    @GetMapping("/api/hello")
    public String hello() {
        return "백엔드에서 준다 임마";
    }

    @GetMapping("/api/junjoy")
    public String mmj() {
        return "잠은 네이버에서 ";
    }

    @GetMapping("/api/no")
    public String no() {
        return "잠은 집에서";
    }

}
