//common.js 
// login 함수: 로그인 처리를 위한 함수
// - 매개변수: mid (회원 아이디), mpw (회원 비밀번호)
// - 리턴값: 로그인 요청 결과(JSON 형식)
async function login(mid,mpw){//로그인 함수 분리
	// 로그인 데이터 객체 생성
	const logindata = {mid,mpw} // 요청 헤더의 Content-Type 설정
	const ctype = "application/json"// 서버에 로그인 요청 (POST 방식)
	const res = await fetch("/member/login",{method:"post",headers:{"Content-type":ctype},body:JSON.stringify(logindata)})
	// HTTP 메서드: POST //요청 헤더 설정 // 요청 데이터 (JSON 형식)
	const data = await res.json();  // 서버에서 받은 응답 데이터를 JSON으로 변환
	return data;    // 변환된 데이터를 반환
}
// logout 함수: 로그아웃 처리를 위한 함수
// - 매개변수: logoutui (로그아웃 버튼 UI 요소)
// - 기능: 로그아웃 버튼 클릭 시 로그아웃 처리
function logout(logoutui){//로그아웃 함수분리
	logoutui.attr("href","/member/logout").text("로그아웃")// 로그아웃 버튼 속성 설정
	logoutui.click(async function(evt){// 로그아웃 버튼 클릭 이벤트 처리
				if($(this).text()=="로그아웃"){// 기본 이벤트 동작(페이지 이동) 방지
					evt.preventDefault();  // 서버에 로그아웃 요청
					const res = await fetch($(this).attr("href"))// 서버에서 받은 응답 데이터를 JSON으로 변환
					const data = await res.json();// 로그아웃 결과 메시지 출력
					alert(data.message)// 홈 페이지로 이동
					location.href="/";
					return false;
				}
	})
}