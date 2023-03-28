package com.hufs.icelink.service;

import com.hufs.icelink.entity.Board;
import com.hufs.icelink.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    @Autowired //주입을 위함
    private BoardRepository boardRepository;
    public void write(Board board) {
        boardRepository.save(board); //Board테이블에 저장

    }
}
