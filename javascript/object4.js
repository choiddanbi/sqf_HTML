/*왕중요 젤중요*/

// 비구조 할당 or 구조 분해 : 내가 뽑고 싶은 거만 뽑아쓰기..??

// 함수 생성
function main() {
    const user = { // 객체 생성
        username : "admin",
        password : "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    // 배열 생성
    const names = ["박현주", "이성희", "권오광", "권혁진"];

    // 객체의 비구조 할당
    const { username, password, email } = user; // const username, const password, const email 을 user 객체에 대입?? // user 의 값들을 해당 변수들에 넣겠따
        console.log(username); // 키값가져옴
        console.log(password);
        console.log(email);


    // 배열의 비구조 할당
    const [ a, b ] = names; // names에 있는 값들을 순서대로 들고와서 순서에 맞는 변수에 넣겠따!!
        console.log(a);
        console.log(b);


    // name을 제외한 나머지 키값들을 가지고 온다 > rest 문법!!!
    const { name , ...rest2 } = user;
        console.log(rest2);


    // rest
    /*let{ name, ...newUse } = user;
    console.log(newUser);

    console.log(names.slice(1,3));
    }*/

}

main();