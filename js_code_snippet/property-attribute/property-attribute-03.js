const o = {
  name: 'hong'
};

console.log(typeof o.__proto__);

console.log(Object.getOwnPropertyDescriptors(o));
console.log(Object.getOwnPropertyDescriptor(o, 'name'));

/*
  value, writable, enumerable, configurable => 내부슬롯
  일부 내부슬롯을 제외하고는 내부 슬롯에 접근할 수 있는 방법을 제공하지 않는다.
  내부슬롯은 자바스크립트 엔진에서 사용하고 외부에 공게 된 프로퍼티는 아니다.

  모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. 그리고 이 내부슬롯에는
  __proto__를 통해 간접적으로 접근할 수 있다.

  프로퍼티 어트리뷰트는 프로퍼티의 상태를 나타낸다.
  프로퍼티의 상태는 value, writable, enumerable, configurable을 말한다.

  프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태값인 내부슬롯 [[Value]],
  [[Writable]], [[Enumerable]], [[Configurable]]이다. 따라서 프로퍼티 어트리뷰트에 직접
  접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다.

  Obejct.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터(PropertyDescriptor)객체를 반환.
  Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체들을 반환.
 */
