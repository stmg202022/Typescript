let myName: string = "";

myName = "samson";
console.log(myName);

let a: number;
a = 10;
// console.log(a);

let names: string[] = [];

names.push("sager");

// function sum(x: number, y: number): string {
//     return x + y;
//   }

function sum(x: number, y: number): number {
  return x + y;
}

sum(4, 6);

//Tuples
let address: [number, string, number];
address = [12, "sam", 56];

let person: { name: string; age: number };

person = {
  name: "Ram",
  age: 23,
};

let anotherPerson: { name: string; age?: number };

anotherPerson = {
  name: "sita",
};

anotherPerson = {
  name: "sita",
  age: 24,
};

function add(a: string, b?: string): string {
  return b ? a + b : a;
}

// console.log(add("2", "4"));
// console.log(add("2"));

// ==========================================================================================
// ==========================================================================================
interface Student {
  name: string;
  age?: number; //optional
  roll: number;
}

let std1: Student;

std1 = {
  name: "Samson",
  age: 23,
  roll: 22,
};

// console.log(std1);

let std2: Student;

std2 = {
  name: "Sagar",
  roll: 33,
};

console.log(std2);

interface Teacher {
  name: string;
  age: number;
  id: number;
}
// ==========================================================================================
// ==========================================================================================
//Union
let p1: Student | Teacher;

p1 = {
  name: "manish",
  age: 34,
  roll: 23,
};

console.log(p1);

//Intersection

let p2: Student & Teacher;

p2 = {
  name: "ramesh",
  age: 22,
  roll: 24,
  id: 23,
};

console.log(p2);

// ==========================================================================================
// ==========================================================================================
//type alias
type Count = string | number; //Or

let d: Count;

d = "dhading";
d = 24;
// d = true; // error occured

type X = string & number; //never
const n: [] = []; //never array
// n.push("hi");

// ==========================================================================================
// ==========================================================================================
//Class
class Car {
  brand;
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    console.log(this.brand);
  }
}

let c = new Car("Samsung");
c.getBrand();

//Public
class CarX {
  constructor(public brand) {}

  getBrand() {
    console.log(this.brand);
  }
}

let c2 = new CarX("BMW");
c2.getBrand();
console.log(c2.brand);

//Private
class CarY {
  constructor(private brand) {}

  getBrand() {
    console.log(this.brand);
  }
}

let c3 = new CarY("Volvo");
c3.getBrand();
// console.log(c3.brand); //Can not access directly due to private key

//Protected
class CarZ {
  constructor(protected brand) {}

  getBrand() {
    console.log(this.brand);
  }
}

const c4 = new CarZ("Merc");
c4.getBrand();
// c4.brand; // can not access directly

// ==========================================================================================
// ==========================================================================================
//Implements
interface ICar {
  brand: string;
  model: string;
}

interface ICar2 {
  release: number;
}

class CarC implements ICar, ICar2 {
  constructor(public brand, public model, public release) {}
}

// ==========================================================================================
// ==========================================================================================
//Generics

function gen<T>(a: T, b: T): T[] {
  return [a, b];
}

console.log(gen<string>("1", "2"));
console.log(gen<number>(1, 2));
//array
console.log(gen<Array<number>>([1], [2, 3]));

// ==========================================================
function addUser<T extends { roll: number }>(user: T) {
  return user.roll;
}
console.log(addUser(std1));

// ==========================================================
//No Restrictions // any type
function noRestrictions(a: any, b: any): any {
  return a + b;
}

console.log(noRestrictions(23, 3));
