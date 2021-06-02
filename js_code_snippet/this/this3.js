class Robot {
  name = 'hong';

  sayName() {
    console.log(this) // Robot
    const name = 'james'
    console.log(name) //
    console.log(this.name)
  }

  sayName2 = () => {
    console.log(this)
    console.log(this.name)
  }

  sayName3 = function () {
    console.log(this)
    console.log(this.name)
  }
}

const robot = new Robot();
console.log(robot.name)
robot.sayName()
robot.sayName2()
robot.sayName3()
