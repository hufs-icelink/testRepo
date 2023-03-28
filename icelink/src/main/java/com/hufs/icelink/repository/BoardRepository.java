package com.hufs.icelink.repository;

import com.hufs.icelink.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> { //<테이블 이름, pk의 타입>


}
