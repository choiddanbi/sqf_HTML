let todoList = [];
loadTodoList();

function handeleTodoInputKeyDown(e) {
    if(e.keyCode === 13) {
        handleTodoOkClick();
    }
}

function handleTodoOkClick(e) {
    const todoInput = document.querySelector(".todo-input");
    if(isBlank(todoInput)) {
        alert("내용을 입력하세요.")
        clearTodoInput();
        return;
    }
    addTodo();
    clearTodoInput();
}

function addTodo() { // 값 입력
    const todo = {
        id: createNewId(),
        contect: document.querySelector(".todo-input").value,
        date: transformDate(new Date())
    }

    todoList = [ ...todoList, todo ]; // todoList 배열에 todo객체 담기
    saveLocalStorage();
    loadTodoList();
    // console.log(todoList);
}


// 수정, 삭제를 위한 id값 부여
function createNewId() {
    const todoIdList = todoList.map(todo => todo.id); // todo 반복 돌려서 id 값만 가져올겡
    const maxId = !todoIdList.length ? 0 : Math.max.apply(null, todoIdList);
    return maxId + 1;
}


function saveLocalStorage() { //localstorage 에 저장하기
    localStorage.setItem("todoList", JSON.stringify(todoList)); // 배애ㅕㄹ -> 문자열로 
}


function loadTodoList() { //localstorage 에 저장된 거 가져오기
    const lsTodoList = localStorage.getItem("todoList");
    todoList = !lsTodoList ? [] : JSON.parse(lsTodoList);
    renderTodoList();
}

function renderTodoList() {
    const TodoListContainer = document.querySelector(".todo-list-container");
    TodoListContainer.innerHTML = todoList.map(todo => {
        return `
         <li class="todo-card">
                <h3 class="todo-date">${todo.date}</h3>
                <p class="todo-content">${todo.contect}</p>
                <div class="todo-buttons">
                    <button class="button edit-button" onclick="handleEditClick(event)" value="${todo.id}">수정</button>
                    <button class="button delete-button" onclick="handleDeleteClick(event)" value="${todo.id}">삭제</button>
                </div>
            </li>
        `;
    }).join("");
}


function clearTodoInput() {
    const todoInput = document.querySelector(".todo-input");
    todoInput.value = "";
    todoInput.focus();
}

function isBlank(input) {
    return !input.value.replaceAll(" ", "");
}


function transformDate(date) {
    const dayList = [ "일", "월", "화", "수", "목", "금", "토" ];
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.(${dayList[date.getDay()]}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
}

function handleDeleteClick(e) {
    if(confirm("정말로 삭제하시겠습니까?")) {
        todoList = todoList.filter(todo => todo.id !== parseInt(e.target.value)); // 선택된 거 빼고 다 담기 = 삭제 // e.target.value 내가 삭제 버튼 누른거의 id 값 ??????
        saveLocalStorage();
        loadTodoList();
    }
}

function handleEditClick(e) {
    const element = `
        <div class="modal-edit-container" onclick="event.stopPropagation()">
            <h3 class="modal-title">TODO 수정하기</h3>
            <div class="input-box">
                <input type="text" class="todo-input" onkeyDown="if(event.keyCode === 13) doocument.querySelector('.modal button:nth-of-type(1)').click()">
            </div>
            <div class="todo-buttons">
                <button class="button" onclick="handleEditOkClick(event)" value="${e.target.value}">확인</button>
                <button class="button" onclick="closeModal()">취소</button>
            </div>
        </div>
    `;
    openModal(element);
    const todoInput = document.querySelector(".modal .todo-input"); // modal 안에 todo-input !!!
    todoInput.focus();
}


function handleEditOkClick(e) {
    todoList = todoList.map(todo => {
        if(todo.id === parseInt(e.target.value)) {
            return {
                ...todo,
                contect: document.querySelector(".modal .todo-input").value,
                date: transformDate(new Date)
            }
        }
        return todo;
    })
    saveLocalStorage();
    closeModal();
    loadTodoList();
}


function handleModalBackgroundClick() {
    closeModal();
}


function openModal(element) {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal-show");
    modal.innerHTML = element;
}


function closeModal() {
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";
    modal.classList.remove("modal-show");
}