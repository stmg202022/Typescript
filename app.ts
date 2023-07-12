let variable = "samson";
variable = "hi";

let age = 18;
// age = "righteen";

let ageWithType: number; //declear with type
// ageWithType = "eighteen";
ageWithType = 18;

// =====================================================================================
// ======================================================================================
//Variable
let numberType: number; //number variable only
numberType = 29;
// console.log(numberType);
// numberType = "twenty-nine";

let stringType: string; //string variable only
stringType = "Tmg";
// stringType = 45;

let bolType: boolean; //bolean variable only
bolType = true;
// bolType = "true";

// ============================================================================
// ==========================================================================
// Variable OR
let typeStringOrNumber: string | number; //string or number type
typeStringOrNumber = 6;
typeStringOrNumber = "6";
// console.log(typeStringOrNumber);

let typeStringOrBoolean: string | boolean;
typeStringOrBoolean = "true";
typeStringOrBoolean = true; //string or Boolean type
// console.log(typeStringOrBoolean);

// =======================================================================================
// =======================================================================================

//Array
let stringList = ["john", "James", "samson"]; //string array only
// Names.push(4); // this is not allowed
stringList.push("sam bahadur");
// Names = [12, 13, false];
stringList = ["sam", "Ram"];
// console.log(stringList);

let numbersList = [11, 12, 13, 14]; //number array only
// numbers.push("numbers"); //This is also not allowed
numbersList.push(45);
// numbers = ["ele", "twe", false];
numbersList = [23, 34, 45];
// console.log(numbersList);

let boolList = [false, true]; // boolean array only
// boolList = ["false", "true"];
// boolList.push("false");
// console.log(boolList);

// {=========================}

//string array
let stringArray: string[]; //string array only
stringArray = ["hello", "world"];
// stringArray.push(5);
// stringArray = [false, 12, 45];
stringArray = ["ele", "twe", "thir"];
// console.log(stringArray);

//number Array
let numberArray: number[]; //number arrray only
numberArray = [12, 13, 14, 15];
// numberArray.push("ele");
// numberArray = ["ele", "twe"];
numberArray = [34, 5, 6];
// console.log(numberArray);

//boolean array
let boolArray: boolean[]; // Boolean Array only
// boolArray = ["false", "true"];
boolArray = [false, true];
// console.log(boolArray);

// {=========================}
// Array OR
let stringOrNumberArray: (string | number)[]; // Both string and Number Array only
stringOrNumberArray = ["samson", 24];
// stringOrNumberArray = ["samson", 24, false];
// console.log(stringOrNumberArray);

let stringOrBooleanArray: (boolean | string)[]; //Both string or Boolean Array only
stringOrBooleanArray = [false, "Samson", true];
// stringOrBooleanArray = [false, "Samson", true, 24];
// console.log(stringOrBooleanArray);

let numberOrBooleanArray: (number | boolean)[]; // Both number or boolean Array only
numberOrBooleanArray = [24, true];
// numberOrBooleanArray = [24, true, "samson"];
// console.log(numberOrBooleanArray);

// =========================================================================================
// ========================================================================================
//Object

let user = {
  username: "Samson", //string only
  age: 24, // number only
  isAdmin: false, //boolean only
  //...dont add new property
};

user.username = "Sagar";
// user.age = "twentyFour";
// user.isAdmin = "false";
user.isAdmin = true;
// console.log(user);
// user.phoneNO = "+98766544";  // we can not add property too.

// {============================}

let userObj: {
  userName: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  userName: "Samson",
  age: 24,
  isAdmin: true,
  //   phoneNo: "+97688855",   // donot add new property
};

// console.log(userObj);

// {============================}

//Some object property which are not compulsory required
let userObj2: {
  userName: string;
  age?: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  userName: "manish",
  age: 24,
  isAdmin: false,
  phone: "+977634563",
};

// console.log(userObj2);

// ========================================================================================
// ========================================================================================
//ANY TYPE

//any for variable
let anyType: any;

anyType = "Samson";
anyType = 24;
anyType = true;
anyType = {};
anyType = [true];

//any for Array
let anyArray: any[];

anyArray = ["samson", 24, true, {}, []];

//any for Object
let anyObj: {
  userName: any;
  age: any;
  isAdmin: any;
  phone: any;
};

anyObj = {
  userName: false,
  age: "twentyFour",
  isAdmin: "false",
  phone: 57549586,
};
// console.log(anyObj);

// ========================================================================================
// ========================================================================================
//FUNCTION

let sayHi = () => {
  // console.log("say hi"); //void
};

let funReturnString = (): string => {
  // console.log("Hello world");
  return "Hello world";
};

//
let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  //   return num * 2;
  //do sth and do not return anyths
  // console.log(num);
};
multiple3(4);

//

let sumNum = (num1: number, num2: number, another?: number): number => {
  return another ? another + num1 + num2 : num1 + num2;
};
// console.log(sumNum(2, 4, 6));

//

//This function looks so ugly due to user Obj ,so we can use the Type Aliases

let func = (user: {
  username: string;
  age: number;
  isAdmin: false;
  phone?: number;
}) => {
  return user.username;
};
// console.log(func({ username: "samsn_Tmg", age: 13, isAdmin: false }));

// ========================================================================================
// ========================================================================================
//TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: number;
};

let betterFun = (user: UserType) => {
  return user.username;
};

let User = {
  username: "samsonTmg",
  age: 24,
  isAdmin: false,
};

// console.log(betterFun(User));

//Prototype
type myFunc = (a: number, b: string) => void;

let myFunc_write: myFunc = (num, str) => {
  // console.log(num + " times " + str);
};

myFunc_write(24, "samson");

//
type myFunc2 = (a: number, b: string) => string;

let myFunc2_write: myFunc2 = (num, str): string => {
  return num + " times " + str;
};
// console.log(myFunc2_write(23, "Tmg"));

type userType2 = {
  username: string;
  age: number;
  isAdmin: boolean;
  theme: "dark" | "light";
};

const userWithTheme: userType2 = {
  username: "samson_user",
  age: 24,
  isAdmin: false,
  theme: "dark",
  //   theme: "pink"
};

// console.log(userWithTheme);

const userWithThemeFun = (user) => {
  // console.log(user.username);
};
userWithThemeFun(userWithTheme);

//
type userInfo = {
  username: string;
  email: string;
  id: number;
};

const data: userInfo[] = [
  { username: "samson", email: "stmg@gmail.com", id: 3 },
  { username: "samson2", email: "stmg2@gmail.com", id: 2 },
];

// console.log(data);

// ========================================================================================
// ========================================================================================
//INTERFACE
//its is like a type..

interface IUser {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "empname",
  age: 24,
  isAdmin: false,
  employeeId: 2,
};
// console.log(emp);

const client: IUser = {
  username: "clientname",
  age: 24,
  isAdmin: false,
};
// console.log(client);

const clientArray: IUser[] = [
  {
    username: "clientname_in_Array",
    age: 24,
    isAdmin: false,
  },
  {
    username: "clientname_in_Array2",
    age: 24,
    isAdmin: false,
  },
];

// console.log(clientArray);

// ========================================================================================
// ========================================================================================

// GENERICS <T>

interface IAuthor {
  id: number;
  username: string;
}

interface ICatagory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICatagory[];
}

const IPost_write: IPost = {
  id: 45,
  title: "Ipost title",
  desc: "IPost desc",
  extra: [{ id: 2, title: "auth_title" }],
};

// console.log(IPost_write);

//for better writing
interface betterIPost<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const IbetterPost: betterIPost<any> = {
  id: 3,
  title: "IbetterPost",
  desc: " test IbettterPost",
  extra: ["samson", "dhading", false, {}], //any[]
};
// console.log(IbetterPost);

interface EvenBetterPost<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const IEvenBetterPost: EvenBetterPost<{ id: number; username: string }> = {
  id: 5,
  title: "EvenbetterPost",
  desc: "writing even better Post",
  extra: [{ id: 3, username: "samsonTmg" }],
};

// console.log(IEvenBetterPost);

const IEvenBetterPost2: EvenBetterPost<IAuthor> = {
  id: 5,
  title: "EvenbetterPost",
  desc: "writing even better Post",
  extra: [{ id: 4, username: "samsontmg" }],
};

// console.log(IEvenBetterPost2);

//=====================
