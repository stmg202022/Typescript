var myName = "";
myName = "samson";
console.log(myName);
var a;
a = 10;
// console.log(a);
var names = [];
names.push("sager");
// function sum(x: number, y: number): string {
//     return x + y;
//   }
function sum(x, y) {
    return x + y;
}
sum(4, 6);
//Tuples
var address;
address = [12, "sam", 56];
var person;
person = {
    name: "Ram",
    age: 23,
};
var anotherPerson;
anotherPerson = {
    name: "sita",
};
anotherPerson = {
    name: "sita",
    age: 24,
};
function add(a, b) {
    return b ? a + b : a;
}
var std1;
std1 = {
    name: "Samson",
    age: 23,
    roll: 22,
};
// console.log(std1);
var std2;
std2 = {
    name: "Sagar",
    roll: 33,
};
console.log(std2);
// ==========================================================================================
// ==========================================================================================
//Union
var p1;
p1 = {
    name: "manish",
    age: 34,
    roll: 23,
};
console.log(p1);
//Intersection
var p2;
p2 = {
    name: "ramesh",
    age: 22,
    roll: 24,
    id: 23,
};
console.log(p2);
var d;
d = "dhading";
d = 24;
var n = []; //never array
// n.push("hi");
// ==========================================================================================
// ==========================================================================================
//Class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c = new Car("Samsung");
c.getBrand();
//Public
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX("BMW");
c2.getBrand();
console.log(c2.brand);
//Private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY("Volvo");
c3.getBrand();
// console.log(c3.brand); //Can not access directly due to private key
//Protected
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ("Merc");
c4.getBrand();
var CarC = /** @class */ (function () {
    function CarC(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarC;
}());
// ==========================================================================================
// ==========================================================================================
//Generics
function gen(a, b) {
    return [a, b];
}
console.log(gen("1", "2"));
console.log(gen(1, 2));
//array
console.log(gen([1], [2, 3]));
// ==========================================================
function addUser(user) {
    return user.roll;
}
console.log(addUser(std1));
// ==========================================================
//No Restrictions // any type
function noRestrictions(a, b) {
    return a + b;
}
console.log(noRestrictions(23, 3));
