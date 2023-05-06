package com.example.demo.service;

import com.example.demo.entity.MemberEntity;
import com.example.demo.model.RoleType;
import com.example.demo.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Service
public class MemberService{

    @Autowired
    private MemberRepository memberRepository;


    public void write(MemberEntity memberEntity, MultipartFile file) throws Exception
    {
        String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";
        //저장할 경로 지정

        UUID uuid = UUID.randomUUID();
        //고유한 이름을 갖기위해서 파일 이름에 붙일 랜덤 number 생성

        String fileName = uuid + "_" + file.getOriginalFilename();
        //저장될 파일 이름: random number + 원래 파일 이름

        File saveFile = new File(projectPath, fileName);

        file.transferTo(saveFile); //MultipartFile의 file데이터를 seveFile 객체에 복사.

        memberEntity.setPicture_name(fileName);
        memberEntity.setPicture_path("/files/" + fileName);
        memberEntity.setRole(RoleType.valueOf("Member"));

        memberRepository.save(memberEntity);

    }



}
