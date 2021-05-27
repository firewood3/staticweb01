class Person {
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
    // constructor 내에서는 별도의 반환문을 갖지 않아야 한다.
    // new 연산자와 함께 클래스가 호출되면 생성자 함수와 동일하게 암묵적으로 this, 즉 인스턴스를
    // 반환한다.
  }
  // 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의
  // prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  static sayHello() {
    console.log('Hello!');
  }
}

console.log(typeof Person); // 클래스는 함수다
const me = new Person('Lee');
me.sayHi();
Person.sayHello();
// me 객체의 프로토타입은 Person.prototype 이다.
console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(me instanceof Person)
Object.getPrototypeOf(me) === Person.prototype; // true
me instanceof Person; // true

// Person.prototype의 프로토타입은 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; // true
me instanceof Object; // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(me instanceof Object);
