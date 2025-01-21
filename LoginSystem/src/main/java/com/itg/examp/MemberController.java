package com.itg.examp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itg.examp.dao.MemberDAO;
import com.itg.examp.dto.MemberDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.Session;

@RestController// REST 컨트롤러임을 나타내는 애너테이션
@RequestMapping("/member")// "/member" URL로 매핑되는 요청을 처리
public class MemberController {// MemberController 클래스 선언
	@Autowired// MemberDAO 객체를 의존성 주입
	MemberDAO dao;
	@Autowired // MemberService 객체를 의존성 주입
	MemberService service;
	@PostMapping("/signup")// POST 요청을 "/signup" 경로로 매핑
	public Map<String, Object> signupMember(MemberDTO member) {// 회원가입 처리 메서드
		// id 는 4 글자이상 pw 6글자 이상으로 입력되게		
		System.out.println(member.toString());// 회원 정보 디버그용 출력
		boolean ckid = service.checkId(member.getMid());// 아이디 유효성 검증
		boolean ckpw = service.checkPassword(member.getMpw());// 비밀번호 유효성 검증
		HashMap<String, Object> hm = new HashMap<>();// 응답 데이터를 담을 Map 객체 생성
		if(!ckid) {// 아이디 유효성 검증 실패 시
			hm.put("message", "아이디를 점검하세요");// 에러 메시지 설정
			return hm;
		}
		if(!ckpw) {// 비밀번호 유효성 검증 실패 시
			hm.put("message", "비밀번호를 점검하세요"); // 에러 메시지 설정
			return hm;
		}
		int res = dao.signupMember(member);// 회원가입 처리
		if(res==1) { // 회원가입 성공 시
			member.setMpw("");// 비밀번호 초기화
			hm.put("message", "회원가입성공"); // 성공 메시지 설정
			hm.put("data", member);// 응답에 회원 데이터 포함
			System.out.println(member.getName()+" 회원 가입성공"); // 디버그 출력
			
		}else {// 회원가입 실패 시
			hm.put("message", "회원가입실패 관리자 문의");// 실패 메시지 설정
			System.out.println("회원가입실패");// 디버그 출력
		}
		return hm;
	}
	@PostMapping("/login") // POST 요청을 "/login" 경로로 매핑
	public Map signin(HttpServletRequest request, @RequestBody Map<String,String> logindata) {
		System.out.println(logindata);// 로그인 데이터 디버그 출력
		HashMap<String, Object> hm = new HashMap<>();// 응답 데이터를 담을 Map 객체 생성
		//로그인 검증	
		MemberDTO member = dao.signinMemeber(logindata);
		if(member!=null) {
			HttpSession auth =  request.getSession(true);// 세션 생성 또는 기존 세션 가져오기
			auth.setAttribute("mid", member.getMid());//세션에 아이디 설정
			//auth.getAttribute("mid");//세션에서 아이디 출력
			hm.put("message", "로그인성공");
			hm.put("member", member);
		}else {
			hm.put("message", "아이디와 비밀번호를 다시 확인 하세요");
		}
		return hm;		
		
	}
	@GetMapping("/logout")
	public HashMap<String,Object> signout(HttpServletRequest request,HttpServletResponse response) {
		HttpSession auth= request.getSession();
		HashMap<String,Object> hm=new HashMap<>();
		hm.put("message",auth.getAttribute("mid")+ "님 로그아웃 되었습니다");
		auth.invalidate();
	
		//response.sendRedirect("/");
		return hm;
	}
	@GetMapping("/listview")
	public Map listView(HttpServletRequest request) {
		HttpSession auth= request.getSession();
		HashMap<String,Object> hm=new HashMap<>();
		if(auth==null) {
			hm.put("message", "로그인을 먼저 해주세요");
		}else {
			List<MemberDTO> ll = dao.memberList();
			System.out.println(auth.getAttribute("mid")+"님이 회원 리스트 요구");
			hm.put("message", "리스트수신");
			hm.put("members", ll);
		}
		return hm;
	}
}
