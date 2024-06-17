// 삭제

let names= ["김준일", "김준이", "김준삼"];

console.log(names);

names = names.map(name => { return name + "님"}); // 기존 배열에서 하나 씩 반복돌려서 꺼내서 나온 return 값으로 새로운 배열로 만들게따 !!
console.log(names); // ["김준일님", "김준이님", "김준삼님"];


/* 값으로 가져오기
names = names.filter(name => {return name !== "김준이님"}); // 김준이 만 빼고 나옴 > 삭제 때 응용할거얌
console.log(names);*/


// 인덱스로 가져오기
names = names.filter((name,index) => {return index !==1;}); // 김준이 만 빼고 나옴 > 삭제 때 응용할거얌
console.log(names);


// 람다로 !!
names = names.filter((name,index) =>  index !==1); // 김준이 만 빼고 나옴 > 삭제 때 응용할거얌
console.log(names);