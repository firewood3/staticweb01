/*

  함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는
  호출할 수 있다. 따라서 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는
  물론, 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]]
  등의 내부 슬롯과 [[Call]], [[Constructor]] 같은 내부 메서드를 추가로 가지고 있다.
  함수가 일반함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와
  함께 생성자 함수로서 호출되면 내부 메서드 [[Constructor]]가 호출된다.

  내부 메서드 [[Call]]을 갖는 함수 객체를 callable이라 하며, 내부 매서드 [[Construct]]를
  갖는 함수 객체를 constructor, [[Constructor]]를 갖지 않는 함수 객체를 non-constructor라고
  부른다. callable은 호출할 수 있는 객체, 즉 함수를 말하며, constructor는 생성자 함수로서
  호출할 수 있는 함수, non-constructor는 객체를 생성자 함수로서 호출할 수 없는
  함수를 의미한다.
  모든 함수 객체는 callable이지만 모든 함수 객체가 constructor인 것은 아니다.

  constructor와 non-constructor의 구분
  - constructor: 함수선언문, 함수 표현식, 클래스(클래스도 함수다)
  - non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수
 */

// [[Call]], [[Construct]], non-constructor
function foo() {}
const bar = function () {};

const baz = {
  x: function () {}
};

console.log(new foo())
console.log(new bar());
console.log(new baz.x());

const arrow = () => {};

// console.log(new arrow());
const obj = {
  /*x: () => {

  }*/
  // x() {}
}
// console.log(new obj.x());
