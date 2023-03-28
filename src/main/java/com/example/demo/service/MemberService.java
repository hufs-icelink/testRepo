package com.example.demo.service;

import com.example.demo.dto.MemberDTO;
import com.example.demo.repository.MemberRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
@Service
@RequiredArgsConstructor
public class MemberService {
    @PersistenceContext
    private final EntityManager em;

    @Bean
    public MemberRepository memberRepository(){
        return new MemberRepository(em);
    }

    public void save(MemberDTO memberDTO) {
    }
}
