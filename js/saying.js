// saying 오브젝트 배열을 생성 
// saying[0-9] => saying[(int)Math.random() * 10] 
// 10은 계속 변하는 수 그래서, 변수로 만들어줌 
// todaysSaying 오늘의 명언 

const saying = document.querySelector("#saying");

const sayings = [
  {
    saying: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    saying: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    saying:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    saying: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    saying: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    saying: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    saying: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    saying: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    saying: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    saying: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

const num = Math.floor(Math.random() * sayings.length);// Math.floor() => 내림, Math.random()*10 (0~9)
const todaysSaying = sayings[num];// 랜덤으로 명언 한 개 할당

saying.innerText = `${todaysSaying.saying} ${todaysSaying.author}`;