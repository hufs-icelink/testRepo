package com.hufs.icelink.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Data;

@Entity
@Data
public class Board_skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer board_id;
    private String skill_name;
}
