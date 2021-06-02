function Robot() {
  this.name = 'jin'
  const name = 'hong';
  const sayName = () => {
    console.log(this)
    console.log(this.name)
  }

  sayName(); // this는 글로벌

  return {
    name: 'james',
    sayName: sayName // this는 글로벌
  }
}

const robot = Robot();
robot.sayName()
