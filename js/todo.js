/*
    to do 생성 
*/
// 적은 밸류 값 지워주기 
// 생성하는 함수 만들어주기 
// document.createElement("li") 해주기
// document.createElement("span")
// li.appendchild(span)을 이용하여 li 안에 넣어주기

/*
    삭제 
*/
// 버튼을 만들어 삭제 
// li 안에 버튼 눌러주기 
// 삭제하는 함수 만들어주기
// 버튼을 클릭해도 어떤 li를 없애는지 알 수 없음 (event.target.parentElement로 누가 클릭되었는지 알수있음 )
// event.target => 클릭된 html 정보 event.target.parentElement=> 클릭된 element 부모의 정보(li)
// event.target.parentElement.remove()로 삭제 

/*
   데이터 저장 
*/
// localstorage 사용 
// 배열 생성후, push 로 삽입 
// localstorate.setItem(이름지정,데이터) 
// 단순 텍스트가 저장되는 것이 아닌 array로 저장되길 원함 (a,b,c(x) / ["a", "b", "c"](o))
// JSON.stringify(아무거나) => 어떤거든 String으로 만들어줌 

/*
   데이터 불러오기
*/
// JSON.parse(String데이터) => 스트링을 데이터로 만들어줌 
// getItem으로 String에서 데이터로 변환된 todos 를 불러옴 
// db에 데이터가 있다면 불러오고 array.forEach(함수);를 사용해 각각의 요소들을 사용가능하게 함 
// 화살표함수 (item) => 내용 item 매개변수는 event처럼 js에서 제공해줌 (요소값을 반환함) 
// 반환한 요소 값으로 다시 creatTodo()를 해줌 
// 하지만 이렇게 불러오면 새로 생긴거가 예전것을 덮어써서 예전거가 사라짐 => 새로고침을 할때마다 빈 배열로 실행하기 때문임 
// 데이터가 있다면 예전꺼를 불러와 배열에 다 넣어줌 

/*
   데이터 삭제
*/
// 삭제 전 각 list에 id를 넣어줌
// 각 toDo에 id가 없으니 arrToDo를 변경해줌 =>
// Date.now() 는 매번바뀌니 각 toDo에 id를 부여해줌 
// 이제는 id가 생겼으니 각 list에 id를 넣어줄 수 있음 
// 지우고싶은 item을 제외하고 배열을 재생성! => array.filter(함수) 각요소마다 함수를 실행 
// [1,2,3,4].filter((item) => filter(item)); 1,2,3,4 각각 하나씩 4번실행되며 이중에 false가 있으면 제외함 => 3번을 제외시키고싶으면 3번을 false 반환
// 이제 list마다 id가 있으며 filter사용법도 알고 있으니 삭제하면된다. 
// 삭제가 안된다면 id의 type을 신경써보자  


const toDoFrom = document.querySelector("#to-do-form");
const toDoFromInput = document.querySelector("#to-do-form input");
const toDoList = document.querySelector("#to-do-list");

const TODOLIST = "toDoList";

let arrToDo = [];// todo 배열 

function submitTodo(event){
    event.preventDefault();// 새로고침 막기 
    const toDoValue = toDoFromInput.value;// 미리 저장해놓고
    toDoFromInput.value = "";// 비우기
    const objectToDo = {// toDo객체를 생성
        id: Date.now(),
        text: toDoValue
    };
    createToDo(objectToDo);// todolist를 만드는 함수
}


// toDoList 생성
function createToDo(objectToDo){
    const li = document.createElement("li");// li 생성
    const span = document.createElement("span");// span 생성

    // 생성
    li.appendChild(span)// span 넣기 
    span.innerText= objectToDo.text// object의 text값 넣기  
    li.id = objectToDo.id// list에 id값 넣기
    
    // 삭제
    const deleteBtn = document.createElement("button");// 삭제버튼 생성
    deleteBtn.innerText="❌";
    deleteBtn.classList.toggle("button");
    li.appendChild(deleteBtn);// 버튼 넣기
    deleteBtn.addEventListener("click", clickDeleteToDo)// 버튼 클릭하면 삭제
    
    // 생성된 li 추가
    toDoList.appendChild(li);

    // toDo를 저장
    arrToDo.push(objectToDo);// 배열에 toDo 객체를 넣어줌
    saveToDo();// db에 저장
}

// toDoList를 db에 저장
function saveToDo(){
    // localStorage.setItem("toDoList", arrToDo); 데이터가 ex(1,2,3) 요딴식으로 저장됨 
    localStorage.setItem(TODOLIST, JSON.stringify(arrToDo));// toToList를 String형식으로 db에 저장 ex(["1", "2", "3"])
}

// 클릭시 toDo 삭제
function clickDeleteToDo(event){
    const li = event.target.parentElement;// event가 일어난 target의 부모 (span의 부모 li)
    li.remove();// li 삭제

    arrToDo = arrToDo.filter((item) => {// arrToDo도 삭제 
        if(item.id === parseInt(li.id)) false;// li.id가 string이므로 int로 바꿔줌 
        else true;
    });

    saveToDo();// 삭제했으니 DB에 다시 갱신 
    
}

toDoFrom.addEventListener("submit", submitTodo);


// toDoList 불러오기
const loadedToDoList = JSON.parse(localStorage.getItem(TODOLIST));// DB에서 불러와 다시 배열 형태로 만든 toDoList 
if(loadedToDoList !== null){// 데이터가 있다면
    loadedToDoList.forEach((item) => createToDo(item));// 각각의 item(인덱스별 value)으로 다시 새로생성(불러오기)
}