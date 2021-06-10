/*
  접근자 프로퍼티
  접근자 프로퍼티(accessor property)는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을
  읽거나 저장할 때 사용하는 접근자 함수(accessor function)로 구성된 프로퍼티다.

  접근자 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

  프로퍼티 어트리뷰트 [[Get]] 프로퍼티 디스크립터 객체의 프로퍼티 get
  접근자 프로퍼티를 통해 데이터의 값을 읽을 때 호출되는 접근자 함수다. 즉, 접근자 프로퍼티 키로
  값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티
  값으로 반환된다.

  프로퍼티 어트리뷰트 [[Set]] 프로퍼티 디스크립터 객체의 프로퍼티 set
  접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다. 즉, 접근자
  프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[set]]의 값, 즉 setter 함수가
  호출되고 그 결과가 프로퍼티 값으로 저장된다.

  [[Enumerable]] (데이터프로퍼티와 같다.)
    - 프로퍼티의 열거 기능 여부를 나타내며 불리언 값을 갖는다.
    - [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for ... in 문이나 Object.keys
    메서드 등으로 열거할 수 없다.
  [[Configurable]] (데이터프로퍼티와 같다.)
    - 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
    - [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의
    변경이 금지된다. 단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false
    로 변경하는 것은 허용된다.

  접근자 함수는 getter/setter 함수라고도 부른다. 접근자 프로퍼티는 getter와 setter 함수를
  모두 정의할 수도 있고 하나만 정의할 수도 있다.
 */

const person = {
  // 데이터 프로피티, 데이터 프로퍼티는 프로퍼티 어트리뷰트를 갖는다.
  firstName: 'Seokjin',
  lastName: 'Hong',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 seter 함수가 호출된다.
person.fullName = 'Usopp Yang';
console.log(person);
/*
{ firstName: 'Usopp', lastName: 'Yang', fullName: [Getter/Setter] }
 */

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);

console.log(Object.getOwnPropertyDescriptors(person))
/*
  데이터 프로퍼티의 프로퍼티 어트리뷰트
  firstName: {
    value: 'Usopp',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Yang',
    writable: true,
    enumerable: true,
    configurable: true
  },
  접근자 프로퍼티의 프로퍼티 어트리뷰트
  fullName: {
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
  }
 */
