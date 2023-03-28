package com.hufs.icelink.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Data
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String user_id;
    private String title;
    private String content;
    private String link;
    private Integer like_num;
    private Integer view_num;
    private String job;
    @CreationTimestamp
    private Timestamp date;
}
