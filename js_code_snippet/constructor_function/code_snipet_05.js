function Circle(radius) {
  return {
    radius: radius,
    getDiameter() {
      return this.radius * 2;
    }
  };
}

const circle1 = Circle(5);
console.log(circle1.getDiameter());
const circle2 = Circle(10);
console.log(circle2.getDiameter());
