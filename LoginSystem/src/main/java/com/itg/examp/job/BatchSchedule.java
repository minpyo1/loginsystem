package com.itg.examp.job;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class BatchSchedule {
	@Autowired
	private final Job job=null;// Spring Batch의 Job 객체를 주입받아 사용
	@Autowired
	private final JobLauncher jobLauncher= null;
	@Scheduled(cron="0 0/5 * * * ?")//스케쥴 실행 어노테이션
	public void runJob() {
		System.out.println("스케줄실행 ==== "); 
		try {
			// jobLauncher를 사용해 job 실행. 실행 시 JobParameters를 전달
			jobLauncher.run(job, new JobParametersBuilder().toJobParameters());
		} catch (JobExecutionAlreadyRunningException | JobRestartException | JobInstanceAlreadyCompleteException
				| JobParametersInvalidException e) {
			// 발생할 수 있는 예외를 처리 (예: 이미 실행 중인 Job, 재시작 불가능한 Job 등)
			e.printStackTrace();// 예외 발생 시 스택 트레이스 출력
		}
		
	}
	//cron="초  분  시  일  월 요일 년도"
	
}