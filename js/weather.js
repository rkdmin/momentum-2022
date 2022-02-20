// navigator.gelocation.getCurrentPosition(잘됐을때함수, 에러가생겼을때함수) 함수에 position객체를 지원해줌 
// position을 argument로 가져가면 여러 정보가 나옴 
// 위도 position.coords.latitude 경도  posision.longitude
// https://openweathermap.org/api 회원가입
// current weather data 에서 위도 경도 api키를 입력하자 api키는 프로필에 
// const url = `나온주소에다 위도경도=${API_KEY}`;
// fetch(url).then(response => response.json()).then(data=>{console.log(data.name,data.weather[0].main)}) 을통해 js가 주소를 부름(내가 들어갈 필요없이)
// 화씨가 나오므로 섭씨로 바꿔주자 &units=memtric 추가  
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "6bb3b3053f5aae3cfacd0d915f2b6efb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);