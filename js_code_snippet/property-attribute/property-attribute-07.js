/*
  접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트[[Value]])을 가지지 않으며 다만 데이터
  프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.

  이를 내부 슬롯/메서드 관점에서 설명하면 다음과 같다. 접근자 프로퍼티 fullName으로 프로퍼티 값에 접근
  하면 내부적으로 [[Get]] 내부 메서드가 호출되어 다음과 같이 동작한다.

  1. 프로퍼티 키가 유효한지 확인
  2. 프로퍼티가 존재하는지 확인
  3. 프로퍼티가 접근자 프로퍼티인지 확인
  4. 접근자 프로퍼티의 프로퍼티 어트리뷰트 [[get]]의 값 즉 getter를 호출하여 그 결과를 반환

  프로토타입
  프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체다. 프로토타입은 하위(자식) 객체에게
  자신의 프로퍼티와 메서드를 상속한다. 프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는
  자신의 프로퍼티 또는 메서드 인 것처럼 자유롭게 사용할 수 있다.
  프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다. 객체의
  프로퍼티나 메서드에 접근하려고 할 때 해당 겍체에 접근하려는 프로퍼티 또는 메서드가 없다면 프로토타입
  체은을 따라 프로퍼타팁의 프로퍼티나 메서드를 차례대로 검색한다.
 */

// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// {get: f, set: f, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
// {value:{...}, writable: true, enumerable: false, configurable: false}

function add () {
  return '';
}

console.log(typeof add.__proto__) // function
console.log(typeof add.prototype) // object
console.log(add.__proto__)
var o = {

}
// console.log(Object.getOwnPropertyDescriptors(o))

console.log(typeof o.__proto__) // object
console.log(typeof o.prototype) // undefined

