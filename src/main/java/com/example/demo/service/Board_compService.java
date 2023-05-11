package com.example.demo.service;

import com.example.demo.entity.Board_comp;
import com.example.demo.repository.Board_compRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class Board_compService {
    @Autowired
    private Board_compRepository board_compRepository;

    public void write(Board_comp board_comp){
        board_compRepository.save(board_comp);


    }
}
