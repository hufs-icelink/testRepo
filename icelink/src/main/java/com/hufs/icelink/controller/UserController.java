package com.hufs.icelink.controller;

import com.hufs.icelink.entity.Board;
import com.hufs.icelink.entity.User;
import com.hufs.icelink.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/write")
    public String userwriteForm() {
        return "userwrite";
    }

    @PostMapping("/user/writepro")
    public String userWritePro(User user) {
        userService.write(user);


        return"";
    }
}
