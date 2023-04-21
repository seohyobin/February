// const newDate  = new Date();  //날짜 객체 불변 변수
let newDate  = new Date();  //날짜 객체 가변 변수

const day = ['일','월','화','수','목','금','토']; // 7개의 방에 요일 저장

// 날짜
console.log( `표준시 new Date()         ${newDate} ` ); // 날짜 확인
console.log( `년 newDate.getFullYear()  ${newDate.getFullYear()}년` ); // 년
console.log( `월 newDate.getMonth()+1   ${newDate.getMonth()+1}월` );   // 월 0~11
console.log( `일 newDate.getDate()      ${newDate.getDate()}일` );   // 일
console.log( `요일 newDate.getDay()     ${newDate.getDay()}요일` );   // 요일 0(일)1(월)2(화)3(수)4(목)5(금)6(토)
console.log( `요일 newDate.getDay()     ${day[newDate.getDay()]}요일` );   // 요일 0(일)1(월)2(화)3(수)4(목)5(금)6(토)

// 0000-00-00
console.log(  `${newDate.getFullYear()}-${newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1 }-${newDate.getDate()}`  );
// 조건문
// if(){}
// switch() case{}

// 삼항연산자
// 조건식(1항) ? 참(2항) : 거짓(3항);
// 월 10보다 작으면 ? `0${월}` : 월
newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1

// 시간
console.log( newDate.getHours()  );  //시
console.log( newDate.getMinutes()  );  //분
console.log( newDate.getSeconds()  );  //초

// 00:00:00
console.log(  `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`  );





// 게터 getter() : 날짜와 시간 가져오기 
// 세터 setter() : 날짜와 시간 변경하기

// 현재 년도에 1년을 더한다. setFullYear( 현재년도 + 1 );
// 현재 월에 1달을 더한다. setMonth( 현재월 + 1 );
// 현재 일에 1일을 더한다. setDate( 현재일 + 1 );
// 현재 시에 1시간을 더한다. setHoure( 현재시 + 1 );
// 현재 분에 1분을 더한다. setMinute( 현재분 + 1 );
// 현재 초에 1초을 더한다. setSecond( 현재초 + 1 );

// newDate.setFullYear( 오늘현재녀도가져오기 + 1 );
newDate.setFullYear( newDate.getFullYear() + 1 ); // 2024 = 2023+1
// 설정된 년도 확인하기
console.log( newDate.getFullYear() , '1년 후' ,  newDate.getFullYear()  );

// 날짜를  표준시로 반환하기
console.log( newDate.toUTCString() );
console.log( newDate.toGMTString() );





// 3개월 더하기
newDate = new Date();

// newDate.setMonth( 현재월을가져오기 + 3 );
console.log(' 셋팅 이전 상태 월 ', newDate.getMonth()+1 );
newDate.setMonth( newDate.getMonth() + 3 );
console.log(' 셋팅 이후 상태 월 ', newDate.getMonth()+1 );
console.log( newDate.toUTCString() );





// 7일 더하기
newDate = new Date();

// newDate.setDate( 현재일을가져오기 + 7 );
console.log(' 셋팅 이전 상태 일 ', newDate.getDate() );
newDate.setDate( newDate.getDate() + 7);
console.log(' 셋팅 이후 상태 일 ', newDate.getDate() );
console.log( newDate.toUTCString() );





// 10시간 더하기
newDate = new Date();

// newDate.setHours( 현재시를가져오기 + 10 );
console.log(' 셋팅 이전 상태 시 ', newDate.getHours() );
newDate.setHours( newDate.getHours() + 10);
console.log(' 셋팅 이후 상태 시 ', newDate.getHours() );
console.log( newDate.toUTCString() );



// 현재 시 분 초 띄우기
// 1초단위로 현재 날짜객체 가져오기
// 자동타이머
setInterval(function(){
    newDate = new Date();
    console.log( `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
}, 1000);  // 1초간격으로 계속 실행