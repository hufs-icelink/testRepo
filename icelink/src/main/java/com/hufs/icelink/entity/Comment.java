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
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer board_id;
    private String user_id;
    private String content;
    private Integer link_num;
    @CreationTimestamp
    private Timestamp date;
}
