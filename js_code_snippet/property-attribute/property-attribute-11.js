const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'SeokJin',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'hong',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true,
  }
});

person.fullName = 'Lebron James';
console.log(person);
