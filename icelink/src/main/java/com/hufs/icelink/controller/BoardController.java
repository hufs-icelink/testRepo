package com.hufs.icelink.controller;

import com.hufs.icelink.entity.Board;
import com.hufs.icelink.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // --> html파일에서 요청이 발생하면 가장먼저 받아주는 부분
public class BoardController {
    @Autowired
    private BoardService boardService;
    @GetMapping("/board/write")
    public String boardwriteForm() {

        return "boardwrite";   //=> templates 폴더의 index.html을 찾아감
    }

    @PostMapping("/board/writepro")
    public String boardWritePro(Board board) { //entity 이름을 작성
        boardService.write(board);


        return"";
    }

}
