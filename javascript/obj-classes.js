class Dog {
  constructor(name) {
    this._name = name;
    this.catagory = "Animal"
  }
  sayHi(msg) {
    console.log(msg);
  }
  static bark() {
    console.log("Woof!");
  }
}

const dogClone = new Dog("Charlie");
console.log(dogClone._name);
