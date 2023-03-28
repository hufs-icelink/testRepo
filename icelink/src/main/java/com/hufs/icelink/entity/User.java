package com.hufs.icelink.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    private String id;
    private String user_pw;
    private String name;
    private String picture;
    private Integer age;
    private String address;
    private String sex;
    private Integer pay;
    private Integer univer_grade;
    private String job;
    private String mail;
    private String link;
    private String short_res;
}
