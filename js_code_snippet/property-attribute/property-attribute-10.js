const person = {

};

Object.defineProperty(person, 'firstName', {
  value: 'seokjin',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'hong',
  configurable: true
});

console.log(person);
console.log(Object.getOwnPropertyDescriptors(person));

console.log(Object.keys(person));

delete person.lastName;
console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, 'fullName', {
  get() {
    return ``;
  }
});
