/*
  # 데이터 프로퍼티
  프로퍼티 어트리뷰트: [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
  프로퍼티 디스크립터 객체의 프로퍼티: value, writable, enumerable, configurable

  [[Value]]
    - 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
    - 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재 할당한다. 이때
    프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다.
  [[Writable]]
    - 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
    - [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는
    읽기전용 프로퍼티가 된다.
  [[Enumerable]]
    - 프로퍼티의 열거 기능 여부를 나타내며 불리언 값을 갖는다.
    - [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for ... in 문이나 Object.keys
    메서드 등으로 열거할 수 없다.
  [[Configurable]]
    - 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
    - [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의
    변경이 금지된다. 단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false
    로 변경하는 것은 허용된다.

  프로퍼티가 생성될 떄 [[Value]]의 값은 프로퍼티 값으로 초기화 되며 [[Writable]], [[Enumerable]],
  [[Configurable]]의 값은 true로 초기화 된다. 이는 프로퍼티를 동적으로 추가해도 마찬가지다.
 */

const person = {
  name: 'Lee'
};
person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));

