const USERNAME = "admin";
const PASSWORD = "1234";

// 함수 정의
function login(username, password) {
    if ( USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    } 
    console.log("로그인 실패");
}

const login2 = login; // 함수를 변수에 넣기 > 함수의 주소가 대입됨 ( 함수명을 바꾸는거임 )

login2("admin", "1234");

// add 함수를 만들어서 add2 변수에 담음
const add2 = function add(x, y) {
    return x + y;
}
console.log (add2 (10, 20));


// 익명 함수 : 함수명 생략 가능
const sub2 = function (x, y) {
    return x - y;
}
console.log(sub2(20,10));


// 화살표 함수(람다)
// 일반 표현
/*const div = function (x, y) {
    return !x || !y ? 0 : x / y;
}*/

// 람다식 표현
let div = (x, y) => {
    return !x || !y ? 0 : x / y;
}

console.log(div(10, 2));

// 화살표 함수 중 명령어 한줄인 경우 >> { return } 생략 가능
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2));


// 화살표 함수( 매개변수가 하나면 괄호 생략 가능 )
const print = data => console.log(data);
print("출력!!")


// 자바스크립트는 함수 안에 함수 정의 가능 // 화살표 함수로 상위 하위 구분지어줌
function main() {
    const test = () => {
        console.log("테스트 함수 호출");
    }
    test();
}
main();
