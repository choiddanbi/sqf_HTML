function modifyUser(user, target, value) {
    const newUser = { // 객체 생성
        ...user, // user객체 안에 들어있는 값들만 들어옴 = 스프레드
        [target]: value //[]로 해야함! ㅁㅐㄱㅐ변수 로 받은게 타겟이 됨 ( username : test-user이 되는데 ), []안하면 target이라는 애 자체가 키값이 됨 ( target : "test-user" 일케됨 )
    };
    return newUser;
}

function main() {
    const user = { // 객체 생성
        username : "admin",
        password : "1234"
    }
    console.log(user);

    // 삭제 방법1 : user의 password를 지워라
    // delete user.password; 
    
    // 객체의 값 수정 예제
    const newUser = modifyUser(user, "username", "test-user"); // 함수 호출로 username 수정
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111"); // 함수 호출로 비밀번호 수정
    console.log(newUser2);


    // 배열의 값 추가
    const userList = [ user, newUser ]; // 배열 100번 주소
    console.log(userList);
    const newUserList = [ ...userList, newUser2 ]; // 배열 userList 요소 복사 200번 주소 즉, 서로 주소가 서로 다름 // userList 값들 복사 후 newUser2값 추가
    console.log(newUserList);

    // 스프레드 -> 깊은 복사 ( 주소값을 새로 만들어서 안의 값들을 옮기는 것 ! ) // userList를 수정하면 newUserList 는 수줭 안됨

    const userList2 = userList; // 얕은 복사 , 서로 주소 같음! userList가 수정되면 userList2 도 수정됨 
}

main();