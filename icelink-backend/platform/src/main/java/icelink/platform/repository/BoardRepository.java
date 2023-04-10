package icelink.platform.repository;

import icelink.platform.dto.Board;
import icelink.platform.dto.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Integer> {


}
