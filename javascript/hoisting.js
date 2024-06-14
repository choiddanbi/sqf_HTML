console.log(a); // 2번

var a; //1번
a = 10; // 3번 출력됨 - 호이스팅
console.log(a); // 4번 이떄 a값 출력


var b = 10;
console.log(b);
var b = 20; // 재선언이 가능 -> 변수의 주소가 바꾸ㅣ는 문제가 생김
console.log(b); 


let c = 30; // {} 안에 안써도 가능
console.log(c);
// let c = 30; // 안됨 : 호이스틴 안됨
c = "40"; // 재할당은 가능

const d = 50;
console.log(d);
// d = 60; // 오류 : 상수는 재할당 안됨
// console.log(d); 