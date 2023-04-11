package icelink.platform.service;

import icelink.platform.dto.Board;
import icelink.platform.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    private final BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public List<Board> getBoardList() {
        return boardRepository.findAll();
    }

    public void save(Board board) {
        boardRepository.save(board);
    }


}
