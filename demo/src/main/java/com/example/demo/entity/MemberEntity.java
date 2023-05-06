package com.example.demo.entity;

import com.example.demo.model.RoleType;
import com.example.demo.model.SexType;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Data
@Setter
@Getter
@Entity //entity 정의 --> 스프링으로 db 테일블 생성
@Table(name = "User")
public class MemberEntity {
    @Id // pk 지정
    private String id;
    @Column(nullable = false, length = 100)
    private String user_pw;
    @Column(nullable = false, length = 50)
    private String name;
    @Column
    private String picture_name;
    @Column
    private String picture_path;
    @Column(nullable = false)
    private Integer age;
    @Column(nullable = false, length = 200)
    private String address;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private SexType sex; // 남자,여자로 도메인 설정
    @Enumerated(EnumType.STRING)
    private RoleType role; // Enterprise,Member,ADMIN 로 도메인 설정
    @Column
    private Integer pay;

    @Column(length = 200)
    private String skill_1;
    @Column(length = 200)
    private String skill_2;
    @Column(length = 200)
    private String skill_3;
    @Column
    private Integer univer_grade;
    @Column(nullable = false, length = 500)
    private String job;
    @Column(nullable = false, length = 50)
    private String mail;
    @Column(nullable = false)
    @Lob
    private String short_res;
    @OneToMany(mappedBy = "memberEntity", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Board> boardList = new ArrayList<>();

    @ManyToMany(mappedBy = "memberEntity")
    private List<User_BoardComp> board_compList = new ArrayList<>();

    @ManyToMany(mappedBy = "memberEntity")
    private List<User_BoardPart> board_partList = new ArrayList<>();

    @OneToMany(mappedBy = "memberEntity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Career> careerList = new ArrayList<>();
    @OneToMany(mappedBy = "memberEntity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Certificate> certificateList = new ArrayList<>();

    @OneToMany(mappedBy = "memberEntity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Comment> commentList = new ArrayList<>();
    @OneToMany(mappedBy = "memberEntity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Link> linkList = new ArrayList<>();




}
