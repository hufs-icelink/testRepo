package icelink.platform.service;


import icelink.platform.dto.Member;
import icelink.platform.dto.RoleType;
import icelink.platform.repository.MemberRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.security.PublicKey;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    public void join(Member member) {

        member.setRole(RoleType.JUNIOR);
        memberRepository.save(member);
    }
    @Transactional
    public Member login(Member member) {

        Member m1 = memberRepository.findByUserNameAndPassword(member.getUserName(), member.getPassword()).orElseGet(()-> {
            return null;
        });

        System.out.println("로그인 완료");

        return m1;
    }

    @Transactional
    public List<Member> rankMember() {
        List<Member> members = memberRepository.findAll(Sort.by(Sort.Direction.DESC, "points"));

        return members.subList(0, 10);
    }


}
