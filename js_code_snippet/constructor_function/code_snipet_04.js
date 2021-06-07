function foo() {
  console.log(this);
  this.name = 'hong'
}

// window, global
foo();

const obj = {foo};
obj.foo();

const inst = new foo();
console.log(inst.name)
