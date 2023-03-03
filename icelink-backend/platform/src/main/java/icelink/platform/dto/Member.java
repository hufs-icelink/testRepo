package icelink.platform.dto;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
public class Member {

    @Id //PK 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberNum;

    @Column(nullable = false, length = 100)
    private String userName;

    @Column(nullable = false, length = 300)
    private String password;

    @Column(nullable = false, length = 100)
    private String email;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    @CreationTimestamp
    private Timestamp createDate;

}
