package icelink.platform.crawling;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.Scanner;

public class Crawling {

    void gitCrawling() throws IOException {
        System.out.println("깃 아이디를 입력하세요.");
        String gitUserId = "mmmjunjoy";
        String gitUrl = "https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/main/README.md";

        Document document = Jsoup.connect(gitUrl).get();
        System.out.println(document);
    }

    void velogCrawling() throws IOException {
        System.out.println("벨로그 아이디를 입력하세요");
        String velogUserId = "mmmjunjoy";
        String velogUrl = "https://raw.githubusercontent.com/" + velogUserId + "/" + velogUserId + "/main/README.md";

        Document document = Jsoup.connect(velogUrl).get();
        System.out.println(document);

        Elements tagA = document.select("a");

        for(Element element : tagA) {
            if(element.toString().contains(velogUserId)) {
                System.out.println(element);
            }
        }
    }

    void tistoryCrawling() throws IOException {
        Scanner sc = new Scanner(System.in);
        String gitUserId = sc.next();
        String gitUrl = "https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/main/README.md";

        Document document = Jsoup.connect(gitUrl).get();
        System.out.println(document);
    }

}
