// 생성자 함수로 객체 생성
function Robot () {
  this.name = 'hong';
  const name = '33';
  return {
    name : 'lebron',
    sayName : function () {
      console.log(this)
      console.log(name)
      console.log(this.name);
    },
    sayName2 : () => {
      console.log(name)
      console.log(this)
      console.log(this.name);
    }
  }
}

let robot = new Robot();
robot.sayName();
robot.sayName2()


const Robot2 = ()=> {
  this.name = 'hong'
  return {
    name : 'lebron',
    sayName : function () {
      console.log(this)
      console.log(this.name);
    },
    sayName2 : () => {
      console.log(this)
      console.log(this.name);
    }
  }
}

const robot2 = Robot2();
robot2.sayName()
robot2.sayName2()

class Robot3 {
  name = 'I am robot3';

  sayName() {
    console.log(this.name);
  }

  sayName2 = () => {
    console.log(this.name);
  }
}

const robot3 = new Robot3();
robot3.sayName();
robot3.sayName();
robot3.sayName2();
