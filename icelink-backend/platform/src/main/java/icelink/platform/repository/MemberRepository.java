package icelink.platform.repository;

import icelink.platform.dto.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Optional<Member> findByUserNameAndPassword(String userName, String password);
    Optional<Member> findByUserName(String userName);
}
