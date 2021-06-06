// 리터럴 생성 문법 관련 ES6 문법
var sayNode = function () {
  console.log('Node');
};

var es = 'ES';
var oldObject = {
  sayJS: function () {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const newObject = {
  sayJs() { // 함수를 선언할 때 :과 function을 붙이지 않아도 된다.
    console.log('JS');
  },
  sayNode, // 속성명과 변수명이 동일한 경우에는 한 번만 써도 된다.
  [es+6] : 'Fantastic' // 리터럴 안에서 객체의 속성명을 동적으로 생성할 수 있다.
};

newObject.sayJs();
newObject.sayNode();
console.log(newObject.ES6);

