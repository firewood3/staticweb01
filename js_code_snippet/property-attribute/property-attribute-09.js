/*
  프로퍼티 어트리뷰트
  지난 시간에 배웠던 것은 무엇인가?
  프로퍼티 어트리뷰트의 생성
  프로퍼티 어트리뷰트란?
  프로퍼티의 상태를 나타내는 것.
  - 그 프로퍼티의 값은 무엇인지.
  - 그 프로퍼티의 값이 수정 가능한지.
  - 프로퍼티 어트리뷰트를 재설정 가능하게 할 것인지.
  - 열거 가능하게 할 것인지.

  프로퍼티 어트리뷰트??
  프로퍼티 어트리뷰트는 내부 슬롯과 내부 메소드에 의존한다.
  프로퍼티 어트리뷰트와 내부 슬롯, 내부 메소드는 자바스크립트 엔진에 의해 제어 되는 것들이다.
  예외적으로 프로퍼티 어트리뷰트에 접근할 수 있게 한 것 중의 하나가 __proto__(객체), prototype(함수) 이다.

  프로퍼티 어트리뷰트는 프로퍼티 디스크립터를 통해서 확인 할 수 있다.
  프로퍼티 어트리뷰트는 데이터 프로퍼티와 접근자 프로퍼티로 나뉜다.
  데이터 프로퍼티는 일반적인 프로퍼티로써 값이 있다.
  접근자 프로퍼티는 get set 키워드를 통해서 생성하며 값이 없고 데이터프로퍼티의 값을 읽거나 할당하는 역할을 하는 프로퍼티다.

  데이터 프로퍼티 어트리뷰트
  value
  writable
  enumerable
  configurable

  접근자 프로퍼티 어트리뷰트
  get
  set
  enumerable
  configurable
 */


const person = {
  name: '',
  set setName (name) {
    this.name = name;
  },
  get getName () {
    return this.name;
  }
};

person.setName = 'hong';
console.log(person.getName);

const animal = {
  set aa(name) {
    this.name = name;
  }
};
Object.defineProperty(animal, 'name', {
  value: 'dog',
  writable: true,
  enumerable: false,
  configurable: false
});
Object.defineProperty(animal, 'setName', {
  set(name) {
    this.name = name;
  },
  enumerable: true,
  configurable: false
});
Object.defineProperty(animal, 'getName', {
  get() {
    return this.name;
  },
  enumerable: true,
  configurable: false
});
console.log(animal);
animal.aa = 'cat';
animal.setName = 'cat2';
animal.name = 'cat3';
console.log(animal.getName);
