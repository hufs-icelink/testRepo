package com.example.demo.repository;

import com.example.demo.entity.Board_comp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface Board_compRepository extends JpaRepository<Board_comp, Integer> {
}