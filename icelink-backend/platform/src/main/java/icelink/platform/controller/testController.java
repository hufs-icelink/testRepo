package icelink.platform.controller;

import icelink.platform.dto.Mail;
import icelink.platform.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class testController {

    private final EmailService emailService;

    public testController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/")
    public String index() {
        return "index.html";
    }

    @GetMapping("/mypage")
    public String myPage() {
        return "mypage.html";
    }

    @GetMapping("/mail/send")
    public String main() {
        return "mail.html";
    }

    @PostMapping("/mail/send")
    public String sendMail(Mail mail) {
        emailService.sendSimpleMessage(mail);
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

}
