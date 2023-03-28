package com.hufs.icelink.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Data;

@Entity
@Data
public class Rank {
    @Id
    private String user_id;
    private Integer score;
    private Integer rank;
    private Integer first_pl;
    private Integer second_pl;
    private Integer third_pl;

}
