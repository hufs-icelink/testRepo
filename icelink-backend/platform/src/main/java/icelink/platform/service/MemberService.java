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
    public void join(String id, String password, String role) {
        Member member = new Member();
        member.setUserName(id);
        member.setPassword(password);

        role = role.toLowerCase();
        if(role.equals("admin")) {
            member.setRole(RoleType.ADMIN);
        }
        else if (role.equals("junior")) {
            member.setRole(RoleType.JUNIOR);
        }
        else {
            member.setRole(RoleType.ENTERPRISE);
        }

        memberRepository.save(member);
    }
    @Transactional
    public Member login(String userName, String password) {

        Member member = memberRepository.findByUserNameAndPassword(userName, password).orElseGet(()-> {
            return null;
        });

        return member;
    }

    @Transactional
    public List<Member> rankMember() {
        List<Member> members = memberRepository.findAll(Sort.by(Sort.Direction.DESC, "points"));

        return members.subList(0, 10);
    }


}
