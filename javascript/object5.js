// user 객체로 받기
function prinUser1(user) {
    console.log(`사용자 이름: ${user.username}`);
    console.log(`비밀번호: ${user.password}`);
    console.log(`이름: ${user.name}`);
    console.log(`이메일: ${user.email}`);
}


// user객체를 비구조할당으로 풀어서 변수받기
// const {username, password, name, email} = user;
// user 로 타고 안들어가도 바로 가져올 수 있음
function prinUser2({username, password, name, email}) {

    console.log(`사용자 이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);
}



function main() {
    const user = { // 객체 생성
        username : "admin",
        password : "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    prinUser1(user); //user 객체 대입
    prinUser2(user);

}


main();