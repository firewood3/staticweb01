const person = {name: 'hong', age: 33};

const normalFunction = function () {
  console.log(this.name);
  console.log(this.age);
}

const arrowFunction = () => {
  console.log(this.name);
  console.log(this.age);
}

const bindedNormalFunction = normalFunction.bind(person);
bindedNormalFunction()
person.name = 'lebron'
bindedNormalFunction()

const bindedArrowFunction = arrowFunction.bind(person);
bindedArrowFunction()
