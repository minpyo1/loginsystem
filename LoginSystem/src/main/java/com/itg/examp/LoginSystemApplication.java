package com.itg.examp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication// Spring Boot 애플리케이션임을 선언하는 애너테이션 (컴포넌트 스캔, 자동 설정 포함)
@EnableScheduling// 스케줄링 기능 활성화를 위한 애너테이션
public class LoginSystemApplication {// LoginSystemApplication 클래스 선언, 애플리케이션 진입점 역할

	public static void main(String[] args) {// 애플리케이션의 메인 메서드, 실행 시작 지점
		System.out.println("서버가 잘 실행되었습니다."); // 서버 실행 확인용 메시지 출력
		SpringApplication.run(LoginSystemApplication.class, args);// Spring Boot 애플리케이션 실행
	}
}
