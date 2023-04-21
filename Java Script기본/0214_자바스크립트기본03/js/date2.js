let newDate = new Date();
const day = ['일','월','화','수','목','금','토'];

//날짜
console.log(`new Date()) ${newDate}`);
console.log(`년 newDate.getFullYear() ${newDate.getFullYear()}년`);
console.log(`월 newDate.getMonth()+1 ${newDate.getMonth()+1}월`);
console.log(`일 newDate.getDate()  ${newDate.getDate()}일`);
console.log(`요일 newDate.getDay() ${newDate.getDay()}요일`);
console.log(`요일 newDate.getDay() ${day[newDate.getDay()]}요일`);

// 0000-00-00

console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1 <10 ?`0${newDate.getMonth()+1}` : newDate.getMonth()+1}-${newDate.getDate()} `)

newDate.getMonth()+1 <10 ? `0${newDate.getMonth()+1}`:newDate.getMonth()+1


//시간

console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());


//00:00:00
console.log(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);


//newDate.setFullyear (오늘현재년도 가져오기+1);


newDate.setFullYear(newDate.getFullYear() +1 );
console.log(newDate.getFullYear(),'1년후', newDate.getFullYear());

//날짜 표준시로 반환

console.log(newDate.toUTCString())

//3개월더하기


newDate = new Date();


//newDate.setMonth(현재월을 가져오기+3);

console.log('셋팅 이전 상태 월', newDate.getMonth()+3);
newDate.setMonth(newDate.getMonth()+3);

console.log('셋팅 이후 상태 월', newDate.getMonth()+1);
console.log(newDate.toUTCString());



//7일더하기

newDate = new Date();


// newDate.setDate( 현재일을가져오기 + 7 );



console.log('셋팅이전상태일',newDate.getDate()+7);
newDate.setDate(newDate.getDate()+7);
console.log('셋팅이후상태일', newDate.getDate());
console.log(newDate.toUTCString());


//10시간 더하기
newDate = new Date();

// newDate.setHours( 현재시를가져오기 + 10 );
console.log('셋팅이전상태 시', newDate.getHours());
newDate.setHours(newDate.getHours()+10);
console.log('셋팅이후상태 시', newDate.getHours());
console.log(newDate.toUTCString());



//현재 시 분 초 /1초단위로 날짜객체/ 자동타이머
setInterval(function(){
    newDate = new Date();
    console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
},1000);



