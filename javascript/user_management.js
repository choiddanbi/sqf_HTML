/*const names = ["김준일", "김준이", "김준삼"];
console.log(names.join(""));*/


let userList = []; // 배열 생성

let emptyUser = { // 객체 생성 > 값을 초기화시키기 위한 함수 생성
    username: "",
    password: ""
};


let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => { // userList 에서 user 하나씩 꺼냄
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>

        `;
    }).join(""); // list를 문자열로 합쳐줄 때 , 생략하기 위해
}



// 함수 생성 ( 키보드 입력이 진행되면, 입력된 값을 자기 자신한테 계속 쌓느 ㄴ함슈 )
function handleUserInputKeyDown(e) {
    user = { 
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);


    // 엔터가 들어오면
    if(e.keyCode === 13 ) {
        const passwordInput = document.querySelector(".password-input"); // password-input 클래스를 가져옴 (태그 객체를 가져옴)
        const usernameInput = document.querySelector(".username-input"); // password-input 클래스를 가져옴 (객체를 가져옴)

        if(e.target.name === "username") { 
            passwordInput.focus();
        }

        if(e.target.name === "password") { // 배열에 넣겠따
            userList = [ ...userList, { ...user } ]; // 새로운 유저를 ...userList 값 복사해서 새 객체인 userList 뒤에 추가하겠따

            renderTable();


            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }

    // console.log(e.target.name);
}