let username: string;
username = "samson";
console.log(username);

//
let animal: {
  name: string;
  age: number;
  height: number;
};
animal = {
  name: "Dog",
  age: 12,
  height: 5,
};
console.log(animal);

//
let animals: object[];
animals = [
  {
    name: "dog",
    age: 23,
    height: 3,
  },
  {
    name: "dog2",
    age: 23,
    height: 3,
  },
];
console.log(animals);

//
let weight: (string | number)[];
weight = [2, 4, 5, 6, "eight"];
console.log(weight);

//
type studentProps = {
  name: string;
  age: number;
  isAdmit: boolean;
};
const studentinfo: studentProps = {
  name: "samson",
  age: 25,
  isAdmit: false,
};
console.log(studentinfo);
