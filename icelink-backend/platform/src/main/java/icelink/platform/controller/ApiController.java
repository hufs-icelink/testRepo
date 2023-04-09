package icelink.platform.controller;

import icelink.platform.service.MemberService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
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

}
