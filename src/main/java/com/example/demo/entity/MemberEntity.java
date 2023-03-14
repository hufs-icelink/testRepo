package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Entity //entity 정의 --> 스프링으로 db 테일블 생성
@Table(name = "memeber_table")
public class MemberEntity {
    @Id // pk 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment (값이 중복되지 않고 1씩 자동 증가)
    private Long id;

    @Column(unique = true) //제약조건 추가
    private  String memberEmail;

    @Column
    private String memberPassword;

    @Column
    private  String memberName;
}
