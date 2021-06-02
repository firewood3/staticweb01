function Robot() {
  this.name = 'jin';
  const name = 'hong'
  function sayName() {
    // console.log(this)
    console.log(name)
    console.log(this.name)
  }

  sayName(); // this는 글로벌

  return {
    name: 'james',
    sayName: sayName // this는 {name:'james', sayName: function}
  }
}

const robot = Robot();
robot.sayName()
