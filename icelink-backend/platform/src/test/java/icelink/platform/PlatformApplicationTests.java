package icelink.platform;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

@SpringBootTest
class PlatformApplicationTests {

	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));



	@Test
	void crawling() throws IOException {
		gitCrawling();

		velogCrawling();
	}

	@Test
	void gitCrawling() throws IOException {
		System.out.println("깃 아이디를 입력하세요.");
		String gitUserId = br.readLine();
		String gitUrl = "https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/main/README.md";

		Document document = Jsoup.connect(gitUrl).get();
		System.out.println(document);
	}

	@Test
	void velogCrawling() throws IOException {

		String velogUserId = "sjb2010";
		String velogUrl = "https://velog.io/@" + velogUserId;

		Document document = Jsoup.connect(velogUrl).get();

		Elements tagA = document.select("a");

		for(Element element : tagA) {
			if(element.attr("href").toString().contains(velogUserId+"/")) {
				System.out.println(element.attr("href"));
			}
		}
	}

	@Test
	void tistoryCrawling() throws IOException {
		Scanner sc = new Scanner(System.in);
		String gitUserId = sc.next();
		String gitUrl = "https://raw.githubusercontent.com/" + gitUserId + "/" + gitUserId + "/main/README.md";

		Document document = Jsoup.connect(gitUrl).get();
		System.out.println(document);
	}


}
