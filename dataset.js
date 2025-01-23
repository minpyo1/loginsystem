
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1h88qawpIGnjIC8JxTH7E53vuulW8wYfI/view?usp=drive_link",imglog:"작성된 요구사항명세",sourceurl:"https://docs.google.com/document/d/1PobzIrZVUotbc5liYv_bAiyTzZXL0pzI-PZVpY3P0x8/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"요구사항 구현 세부사항",imgurl:"https://drive.google.com/file/d/1OH7Wj8l5veeeGYmiBULw4uH88VvitMYP/view?usp=drive_link",imglog:"작성된 구현 세부 사항",sourceurl:"https://docs.google.com/document/d/1PobzIrZVUotbc5liYv_bAiyTzZXL0pzI-PZVpY3P0x8/edit?usp=drive_link"})


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1ECQZ6OabI92nZSuh8PG3V7YBAGPUQZZY/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1Vqkes5Kz1KstHVvT3UT47xK8DgUgM10QSa8GdDKrORs/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1FuCZk_Ifny_IoYfcWv084-T5bJ3HczVC/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"html5(VSCODE)",imgurl:"https://drive.google.com/file/d/1tGNps36lfRW96K792Y6RKvrufMiIn-rE/view?usp=drive_link",imglog:"오픈소스 VSCODE v1.96.4",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"HeidiSQL",imgurl:"https://drive.google.com/file/d/1Vc5YXNp7LWHg45vKrDa82gZInUlDAEJX/view?usp=drive_link",imglog:"HeidiSQL v12.8.0.6908",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"memberData",imgurl:"https://drive.google.com/file/d/1-cqkKz8FNP6qZa5wZpXUqRmHuQmaxF1Y/view?usp=drive_link",imglog:"Member Table",sourceurl:""})//이미지타이틀


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1zIFM-WmbSB8PeqxnX6AS0JjNOJbElgsE/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1S7Hv-wZBD5_NiLz-F3fA7sEe5TcUosOBvwXTLypR1zM/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1iDKoYlXX7UYgFBZDs5zB3B9u3FmLeUdR/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1q9TOzxwvdOgRKUnbSm1CBwcNx_hAU4rr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1oz5vxKarY5GbvT1USATr5ikeMaW2Zk2r/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트도구 Postman ",imgurl:"https://drive.google.com/file/d/1hKhNwiY_JiR_5SaWvjfxUCXSxVvVY7nX/view?usp=drive_link",imglog:"API 테스트 및 개발을 지원하는 도구로, 요청과 응답을 시뮬레이션하며 팀 간 협업을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"패키징 도구 WAR",imgurl:"https://drive.google.com/file/d/1a5XQA_BC5ymjF-KF_xzBm5cqhAcI0c8i/view?usp=drive_link",imglog:"Java 기반 웹 애플리케이션을 패키징하여 배포할 수 있도록 돕는 도구",sourceurl:""})//이미지타이틀




d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"공통모듈구현",imgurl:"https://drive.google.com/file/d/1LfqUaf79QmucBW6lpRhgcmN88DGy63gy/view?usp=drive_link",imglog:"작성된 공통모듈",sourceurl:"https://docs.google.com/document/d/1PobzIrZVUotbc5liYv_bAiyTzZXL0pzI-PZVpY3P0x8/edit?usp=drive_link"})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈 분리대상",imgurl:"https://drive.google.com/file/d/1QYJ8q1nmSMCwW5jm0KLTJHTv80sJv0wx/view?usp=drive_link",imglog:"로그인과 로그아웃 기능이 길게 작성되어있음",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈 테스트 작성",imgurl:"https://drive.google.com/file/d/1vMWlJq6Kxhtedjf1uGIoYsDKilxHag4R/view?usp=drive_link",imglog:"공통모듈이 잘 작동하는지 테스트 페이지 작성",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"공통함수호출",imgurl:"https://drive.google.com/file/d/1IEjHC_ISw9BQ4iM5PNTQWO0mB1YWDKK4/view?usp=drive_link",imglog:"기존의 긴 코드를 대체하여 함수 호출 코드로 줄임",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈테스트",imgurl:"https://drive.google.com/file/d/1VseuH99d6TBfZJpoqr9AVrj-yhPcBGXh/view?usp=drive_link",imglog:"테스트페이지",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈테스트",imgurl:"https://drive.google.com/file/d/1yRKUQT--9XpXtAT60Ti96_5uHmdCqpXQ/view?usp=drive_link",imglog:"회원가입된 아이디 입력",sourceurl:""})//이미지타이틀
d2.set_img(0,{imgtitle:"공통모듈테스트",imgurl:"https://drive.google.com/file/d/1AGQ1cp7iqhJumVtx8g7HOW7nkT_BD7Aa/view?usp=drive_link",imglog:"잘 작동하는 걸 알 수 있음",sourceurl:""})//이미지타이틀


d2.set_content("테스트케이스를 작성합니다.")
d2.set_content("단위테스트를 작성합니다.")

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
