// 함수 정의 1
function add(x, y) {
    return x + y;
}

const result = add(10, 20); // 함수 호출 , z : undifined 되어버림 3번 add , 7번 result
console.log(result); // result 없으니까 undifined 8번

function add (x, y, z) { // add 를 재정의 해버림.. 자바스크립트는 오버로딩이 없음 >> 2번
    console.log(x); // 4번 10번
    console.log(y); // 5번 11번
    console.log(z); // 6번 12번
}

add(10, 20, 30); // 9번
