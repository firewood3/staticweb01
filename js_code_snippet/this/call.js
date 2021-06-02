const person = {name: 'hong', age: 33};

const normalFunction = function () {
  console.log(this.name);
  console.log(this.age);
}

normalFunction.call(person)

const arrowFunction = () => {
  console.log(this.name);
  console.log(this.age);
}

arrowFunction.call(person)

person.name = 'lebron'

normalFunction.call(person)
