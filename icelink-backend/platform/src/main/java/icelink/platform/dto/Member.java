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
@Setter
@Getter
public class Member {

    @Id //PK 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberNum;

    @Column(nullable = false, length = 100)
    private String userName;

    @Column(nullable = false, length = 300)
    private String password;

    @Column(nullable = true, length = 100)
    private String email;

    @Column(nullable = true, length = 100)
    private String githubId;

    @Column(nullable = true, length = 100)
    private String tistoryId;

    @Column(nullable = true, length = 100)
    private String velogId;

    @Column
    private String points;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    @CreationTimestamp
    private Timestamp createDate;

}
