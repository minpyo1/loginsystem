package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class BatchConfiguration {
	int count=0;// 배치 작업 수행 횟수를 기록하기 위한 변수
	@Bean// Job 객체를 Spring 컨텍스트에 등록
	public Job helloJob(JobRepository jobRepository,Step helloStep) {
		 // JobBuilder를 사용해 Job 정의. 첫 번째 Step으로 helloStep을 실행
		return new JobBuilder("helloJob",jobRepository)
				.start(helloStep)// helloStep을 첫 번째 Step으로 설정
				.build();// Job 생성
	}
	@Bean// Step 객체를 Spring 컨텍스트에 등록
	public Step helloStep(JobRepository jobRepository,Tasklet hellolTasklet,PlatformTransactionManager transactionManager) {
		// StepBuilder를 사용해 Step 정의. Tasklet과 트랜잭션 매니저를 설정
		return new StepBuilder("helloStep",jobRepository)
				.tasklet(hellolTasklet,transactionManager)// Tasklet과 트랜잭션 설정
				.allowStartIfComplete(true)// true 이면 배치작업 반복
				.build();// Step 생성
	}
	@Bean
	public Tasklet hellolTasklet() {//배치작업 수행
		return (contribution,chunkContext)->{
			count++;// 배치 작업 실행 횟수 증가
			System.out.println(count+":: 스프링 배치작업 수행중...");
			return RepeatStatus.FINISHED;// 작업이 성공적으로 완료되었음을 나타냄	
		};
	}
}