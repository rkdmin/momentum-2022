// setInterval(함수, 5000) 함수를 5초마다 실행 
// setTimeout(함수, 5000) 함수를 5초지나고 한 번 실행
// date = new Date();// date정보를 가져옴 (ex) date.getHours() => 현재 시간 불러옴)
// 1초뒤에 getClock이 실행되기에 바로 실행시켜야함 
// 00:00:00 이아닌 00:00:0으로 되는 것을 고치기 => String을 두자리로 만들어준다. => string.padStart(2, "0") 2자리가 없다면 앞에 0추가(padEnd도 있음)

const clock = document.querySelector("#clock");


function getClock(){
    const date = new Date();// 현재 시간 불러오기 
    const hours = String(date.getHours()).padStart(2, "0");// string 형으로 시간 저장
    const minutes = String(date.getMinutes()).padStart(2, "0");// padStart로 00 01 02 구현
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText=`${hours}:${minutes}:${seconds}`;// 시간 넣기
}

getClock();// 1초뒤에 함수 실행되기에 그전에 최초로 한번실행
setInterval(getClock, 1000);// 1초마다 getClock실행 