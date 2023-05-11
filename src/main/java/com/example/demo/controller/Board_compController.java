package com.example.demo.controller;

import com.example.demo.entity.Board_comp;
import com.example.demo.service.Board_compService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller

public class Board_compController {
    @Autowired
    private Board_compService board_compService;

    @GetMapping("/board/board_comp")
    public String saveFrom(){
        return "board_comp";
    }

    @PostMapping("/board/board_comp")
    public String board_compSave(Board_comp board_comp){
        board_compService.write(board_comp);

        return "index";
    }
}
