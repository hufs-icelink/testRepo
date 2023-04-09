package icelink.platform.controller;

import icelink.platform.dto.Member;
import icelink.platform.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.http.HttpRequest;
import java.util.List;

@RestController
public class ApiController {

    private final MemberService memberService;

    public ApiController(MemberService memberService) {
        this.memberService = memberService;
    }


    @GetMapping("/ranking")
    public List ranking()  {
        return memberService.rankMember();
    }

    @PostMapping("/member/join")
    public void join(@RequestBody Member member) {
        memberService.join(member);
    }

    @PostMapping("/member/login")
    public void login(@RequestBody Member member, HttpServletRequest request) {

        System.out.println(member.getUserName());
        System.out.println(member.getPassword());

        Member m1 = memberService.login(member);

        if(m1 == null) {
            System.out.println("존재하지 않는 사용자입니다.");
            return;
        }

        System.out.println(m1.getUserName());
        System.out.println(m1.getPassword());

        HttpSession session = request.getSession();
        session.setAttribute("userName", m1.getUserName());
        session.setAttribute("githubId", m1.getGithubId());
        session.setAttribute("tistoryId", m1.getTistoryId());
        session.setAttribute("velogId", m1.getVelogId());
        session.setAttribute("role", m1.getRole());

        session.setMaxInactiveInterval(30*60);



    }

}
