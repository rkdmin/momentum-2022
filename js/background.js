// img배열을 생성, img 불러오기 
// 랜덤으로 이미지 이름 불러오기
// 불러온 이미지 이름을 이용해 html 추가하기
// img = document.createElement(img) => <img> 태그생성
// img.src = "이미지주소"; => 이미지를 주소 넣음 
// img를 body에 추가해주기 => document.body.appendChild(html); // html을 추가 

const images = ["1.jpg", "2.webp", "3.webp"];
const n = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(img/${images[n]})`;