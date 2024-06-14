// 객체 Key : value; 로 구성

// user 객체 생성
const user = {
    username: "admin", 
    password: "1234", 

    name: {
        lastName:"김",
        firstName:"준일"
    },

    // 익명 함수 print 생성 
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호 : ${user.password}`); // 로도 작성 가능 
    }
};


console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);
user.print(); // print 메소드 호출
