var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Ashan',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt(){
    console.log(`Hi. I'm ${this.name}`);
  }
}

user.sayHiAlt();
