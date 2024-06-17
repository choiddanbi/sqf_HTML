/*const names = ["김준일", "김준이", "김준삼"];
console.log(names.join(""));*/
// 순서 : 선언 function저의 >

//inputMode = 1 > 추가
//inputMode = 2 > 수정
let inputMode = 1;


let userList = [];
loadUserList();


let emptyUser = { 
    id: 0,
    name: "",
    username: "",
    password: ""
};


let user = {
    ...emptyUser 
}


//배열명.map(변수, idex)
function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => { // userList 에서 user 하나씩 꺼냄, map (배열의 요ㅗ소들을 콜백함수?ㅇ를 적용해서 새로운 배열로 반환) // 배열을 반복 돌려라
        return `
            <tr>
                <th><input type = "checkbox" onchange="handleUsercheck(event)"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <td><button onclick="deleteUser(event)" value="${id}">삭제</button></td>
            </tr>
        `;
    }).join("");
}



// 함수 생성 ( 키보드 입력이 진행되면, 입력된 값을 자기 자신한테 계속 쌓느 ㄴ함슈 )
function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    //user[e.target.name] = e.target.value;

    if(e.keyCode === 13 ) {
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input"); // password-input 클래스를 가져옴 (객체를 가져옴)
        const passwordInput = document.querySelector(".password-input"); // password-input 클래스를 가져옴 (태그 객체를 가져옴)

        if(e.target.name === "name") {
            usernameInput.focus();
        } 

        if(e.target.name === "username") { 
            passwordInput.focus();
        }

        if(e.target.name === "password") {
            userList = [ ...userList, { ...user, id: getNewId() } ];

            saveUserList();
            renderTable();

            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();
        }
    }
}

// localStorage... 저장
function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

// userList 가져오기
function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
    renderTable(); // 화면에 보여주기...ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
}

// 인덱스로 지우기
/*function deleteUser(e) {
    userList = userList.filter((user, index) => index !== parseInt(e.target.value)); // 삭제 누른애 뺴고 담기 !== 자료형과 데이터값 비교! , index는 넘버, target.value 는 문자열 그래서 안됨
    saveUserList();
    renderTable();
    //console.log(e.target.value);
}*/


//id로 지우기
function deleteUser(e) {
    userList = userList.filter(({id}) => id !== parseInt(e.target.value)); // 삭제 누른애 뺴고 담기 !== 자료형과 데이터값 비교! , index는 넘버, target.value 는 문자열 그래서 안됨
    saveUserList();
    renderTable();
}

function getNewId() {
    const userIds = userList.map(user => user.id); // user 중에 id만 델꼬올게 
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds); // 배열들중에서 제일 큰 값 가져옴
    return maxUserId + 1;
}

function handleUsercheck(e) {
    // console.log(e.target.checked);
    e.target.checked = true;
}
