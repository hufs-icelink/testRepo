package icelink.platform.controller;

import icelink.platform.dto.Mail;
import icelink.platform.service.EmailService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@org.springframework.stereotype.Controller
public class Controller {

    private final EmailService emailService;

    public Controller(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/")
    public String index(HttpServletRequest request) {

        HttpSession session = request.getSession();
        System.out.println("로그인 된 유저: " + session.getAttribute("userName"));
        System.out.println("깃허브아이디: " + session.getAttribute("githubId"));
        System.out.println("벨로그아이디: " + session.getAttribute("velogId"));
        System.out.println("티스토리아이디: " + session.getAttribute("tistoryId"));
        System.out.println("유저 롤: " + session.getAttribute("role"));

        return "index.html";
    }

    @GetMapping("/mypage")
    public String myPage() {
        return "mypage.html";
    }

    @GetMapping("/member/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.removeAttribute("userName");
        session.invalidate();

        return "index.html";
    }

    @GetMapping("/member/join")
    public String join() {
        return "join.html";
    }


    @GetMapping("/member/login")
    public String login() {
        return "login.html";
    }


    @GetMapping("/mail/send")
    public String main() {
        return "mail.html";
    }

    @PostMapping("/mail/send")
    public String sendMail(HttpServletRequest request) {
        emailService.sendSimpleMessage(request);
        System.out.println("메일 전송 완료");
        return "mailcheck.html";
    }

    @PostMapping("/mail/check")
    public String checkMail(Mail mail) {
        if(emailService.checkEmail(mail)) {
            return "index.html";
        }
        return "mailcheck.html";
    }

    @GetMapping("/board")
    public String newBoard() {
        return "board.html";
    }

}
