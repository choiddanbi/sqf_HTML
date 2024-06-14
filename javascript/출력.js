

var num = 10;
var sNum = "10";
console.log(num === sNum);
var num2; // undefined 은 false 로 봄
console.log(!num2); 
/*
   !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터(boolean)로 변환 하는 방법
    var num = 10;
    !!num; // true
    num = 0; // 0 은 false로 봄
    !!num // false

    var str = "test";
    !!str // true
    str = ""; // 공백은 false 로 봄
    !!str // false

    var array = [ 1, 2, 3 ];
    !!array // true
    array = []; 
    !!array // true 배열은 빈 값이어도 true 임 그래서 .length 사용 ( 배열은 객체라서 빈 값에 주소가 들어가기 때문 )
    !!array.length // false
    array.length === 0 // false
    array.length > 0 // false
*/ 

// if 기준으로 전역변수들
var num = 0;
console.log(!!num); // false
var str = ""; // " " 도 false
console.log(!!str); // false
var array = [];
console.log(!!array); // true
console.log(!!array.length); // false
var a;
console.log(!!a); // false ( undifined : false )
var b = null;
console.log(!!b); // false ( null : false )
var c = 0 / 0;
console.log(!!c); // false ( 연산의 오류 NaN - false )


if(num === 0) {
    console.log("num은 0입니다.");
} 

if (!num) {
    var num2 = 20; // if 입장에서 num2 는 지역변수이고, 
    console.log("num은 0입니다.");
    if (!!num2) {
        console.log("num2는 값이 있습니다.")
    }
} // 아ㅣ걸로도 가능

if (!str) {
    console.log("빈 문자열입니다.")
}

if (!b) {
    console.log("Null입니다.")
}

if(!a) {
    console.log("undifined 입니다.")
}