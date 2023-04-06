package icelink.platform.service;


import icelink.platform.dto.Mail;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@AllArgsConstructor
public class EmailService {

    private JavaMailSender emailSender;

    public static final String key = randomCode();


    public void sendSimpleMessage(Mail mailDto) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("hoyoung.wjd@gmail.com");
        message.setTo(mailDto.getAddress());
        message.setSubject("인증코드입니다.");
        message.setText("Icelink 플랫폼을 이용해주셔서 감사합니다. \n\n인증번호는 다음과 같습니다: " + key);
        emailSender.send(message);
    }

    public static String randomCode() {
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for (int i = 0; i < 8; i++) { // 인증코드 8자리
            int index = rnd.nextInt(3); // 0~2 까지 랜덤

            switch (index) {
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97));
                    //  a~z  (ex. 1+97=98 => (char)98 = 'b')
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65));
                    //  A~Z
                    break;
                case 2:
                    key.append((rnd.nextInt(10)));
                    // 0~9
                    break;
            }
        }

        return key.toString();
    }

    public boolean checkEmail(Mail mailDto) {

        System.out.println("입력받은 키값 "+ mailDto.getKey());
        System.out.println("보낸 키값 " + key) ;

        if(mailDto.getKey().equals(key)) {
            return true;
        }
        return false;
    }

}
