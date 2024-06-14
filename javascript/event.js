function handleButtonClick(e) {
    console.log({event: e}); // e 객체 보여줌
    e.target.innerHTML = "취소"; // e.target // e 객체 안에 target 객체 , 내가 클릭한 요소
    // e.target.innerHTML // event 객체 안에 들어있는 targer 속성 안에 innerHTML
} 

/*
function handleInputChange(e) {
    console.log(e.target.value); // target이 input 객ㅊㅔ임
}*/


function handleInputChange(e) { // ctrl + enter 하면 alert을 띄워주겠따
    if(e.ctrlKey && (e.KeyCode === 13 || e.key === "Enter")) {
        alert(e.target.value); 
    }
}

/*
let isFocus = false;

function handleInputFocus(e) {
    if(!isFocus) {
        isFocus = true;
        alert("입력하세요");
    }
}
*/

function handleInputFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}


function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.");
    }
}
