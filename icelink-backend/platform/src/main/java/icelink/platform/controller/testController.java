package icelink.platform.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;

@Controller
public class testController {
    @GetMapping("/")
    public String index() {
        return "index.html";
    }

    @GetMapping("/mypage")
    public String myPage() {
        return "mypage.html";
    }




}
