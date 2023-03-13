package icelink.platform.controller;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class controller {
    @GetMapping("/github/{id}")
    public String crawlingGithub(@PathVariable("id") String gitUserId) throws IOException {

        String gitUrl = "https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/main/README.md";

        Document document = Jsoup.connect(gitUrl).get();

        return document.toString();
    }
    @GetMapping("/velog/{id}")
    public String crawlingVelog(@PathVariable("id") String velogUserId) throws IOException {

        StringBuilder sb= new StringBuilder();

        String velogUrl = "https://velog.io/@" + velogUserId;

        Document document = Jsoup.connect(velogUrl).get();

        Elements tagA = document.select("a");

        for(Element element : tagA) {
            if(element.attr("href").toString().contains(velogUserId+"/")) {
               sb.append(element.attr("href") + "\n");
            }
        }

        return sb.toString();
    }

    @GetMapping("tistory/{id}")
    public String crawlingTistory(@PathVariable("id") String tistoryUserId) throws IOException {

        String tistoryUrl = "https://" + tistoryUserId + ".tistory.com";
        Document document = Jsoup.connect(tistoryUrl).get();

        return document.toString();
    }



}
