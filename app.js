var variable = "samson";
variable = "hi";
var age = 18;
// age = "righteen";
var ageWithType; //declear with type
// ageWithType = "eighteen";
ageWithType = 18;
// =====================================================================================
// ======================================================================================
//Variable
var numberType; //number variable only
numberType = 29;
// console.log(numberType);
// numberType = "twenty-nine";
var stringType; //string variable only
stringType = "Tmg";
// stringType = 45;
var bolType; //bolean variable only
bolType = true;
// bolType = "true";
// ============================================================================
// ==========================================================================
// Variable OR
var typeStringOrNumber; //string or number type
typeStringOrNumber = 6;
typeStringOrNumber = "6";
// console.log(typeStringOrNumber);
var typeStringOrBoolean;
typeStringOrBoolean = "true";
typeStringOrBoolean = true; //string or Boolean type
// console.log(typeStringOrBoolean);
// =======================================================================================
// =======================================================================================
//Array
var stringList = ["john", "James", "samson"]; //string array only
// Names.push(4); // this is not allowed
stringList.push("sam bahadur");
// Names = [12, 13, false];
stringList = ["sam", "Ram"];
// console.log(stringList);
var numbersList = [11, 12, 13, 14]; //number array only
// numbers.push("numbers"); //This is also not allowed
numbersList.push(45);
// numbers = ["ele", "twe", false];
numbersList = [23, 34, 45];
// console.log(numbersList);
var boolList = [false, true]; // boolean array only
// boolList = ["false", "true"];
// boolList.push("false");
// console.log(boolList);
// {=========================}
//string array
var stringArray; //string array only
stringArray = ["hello", "world"];
// stringArray.push(5);
// stringArray = [false, 12, 45];
stringArray = ["ele", "twe", "thir"];
// console.log(stringArray);
//number Array
var numberArray; //number arrray only
numberArray = [12, 13, 14, 15];
// numberArray.push("ele");
// numberArray = ["ele", "twe"];
numberArray = [34, 5, 6];
// console.log(numberArray);
//boolean array
var boolArray; // Boolean Array only
// boolArray = ["false", "true"];
boolArray = [false, true];
// console.log(boolArray);
// {=========================}
// Array OR
var stringOrNumberArray; // Both string and Number Array only
stringOrNumberArray = ["samson", 24];
// stringOrNumberArray = ["samson", 24, false];
// console.log(stringOrNumberArray);
var stringOrBooleanArray; //Both string or Boolean Array only
stringOrBooleanArray = [false, "Samson", true];
// stringOrBooleanArray = [false, "Samson", true, 24];
// console.log(stringOrBooleanArray);
var numberOrBooleanArray; // Both number or boolean Array only
numberOrBooleanArray = [24, true];
// numberOrBooleanArray = [24, true, "samson"];
// console.log(numberOrBooleanArray);
// =========================================================================================
// ========================================================================================
//Object
var user = {
  username: "Samson",
  age: 24,
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
var userObj;
userObj = {
  userName: "Samson",
  age: 24,
  isAdmin: true,
  //   phoneNo: "+97688855",   // donot add new property
};
// console.log(userObj);
// {============================}
//Some object property which are not compulsory required
var userObj2;
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
var anyType;
anyType = "Samson";
anyType = 24;
anyType = true;
anyType = {};
anyType = [true];
//any for Array
var anyArray;
anyArray = ["samson", 24, true, {}, []];
//any for Object
var anyObj;
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
var sayHi = function () {
  // console.log("say hi"); //void
};
var funReturnString = function () {
  // console.log("Hello world");
  return "Hello world";
};
//
var multiple = function (num) {
  return num * 2;
};
var multiple2 = function (num) {
  return num * 2;
};
var multiple3 = function (num) {
  //   return num * 2;
  //do sth and do not return anyths
  // console.log(num);
};
multiple3(4);
//
var sumNum = function (num1, num2, another) {
  return another ? another + num1 + num2 : num1 + num2;
};
// console.log(sumNum(2, 4, 6));
//
//This function looks so ugly due to user Obj ,so we can use the Type Aliases
var func = function (user) {
  return user.username;
};
var betterFun = function (user) {
  return user.username;
};
var User = {
  username: "samsonTmg",
  age: 24,
  isAdmin: false,
};
var myFunc_write = function (num, str) {
  // console.log(num + " times " + str);
};
myFunc_write(24, "samson");
var myFunc2_write = function (num, str) {
  return num + " times " + str;
};
var userWithTheme = {
  username: "samson_user",
  age: 24,
  isAdmin: false,
  theme: "dark",
  //   theme: "pink"
};
// console.log(userWithTheme);
var userWithThemeFun = function (user) {
  // console.log(user.username);
};
userWithThemeFun(userWithTheme);
var data = [
  { username: "samson", email: "stmg@gmail.com", id: 3 },
  { username: "samson2", email: "stmg2@gmail.com", id: 2 },
];
var emp = {
  username: "empname",
  age: 24,
  isAdmin: false,
  employeeId: 2,
};
// console.log(emp);
var client = {
  username: "clientname",
  age: 24,
  isAdmin: false,
};
// console.log(client);
var clientArray = [
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
var IPost_write = {
  id: 45,
  title: "Ipost title",
  desc: "IPost desc",
  extra: [{ id: 2, title: "auth_title" }],
};
var IbetterPost = {
  id: 3,
  title: "IbetterPost",
  desc: " test IbettterPost",
  extra: ["samson", "dhading", false, {}], //any[]
};
var IEvenBetterPost = {
  id: 5,
  title: "EvenbetterPost",
  desc: "writing even better Post",
  extra: [{ id: 3, username: "samsonTmg" }],
};
// console.log(IEvenBetterPost);
var IEvenBetterPost2 = {
  id: 5,
  title: "EvenbetterPost",
  desc: "writing even better Post",
  extra: [{ id: 4, username: "samsontmg" }],
};
var student = {
  name: "samson",
  roll: 22,
  age: 24,
};
var initialStates = {
  posts: [{ postId: 1, title: "post one", body: "about mysellf" }],
  status: true,
};
var users = [
  {
    name: "Samson",
    age: 23,
    admin: false,
    address: {
      city: "ktm",
      state: "bagmati",
    },
    gender: "male",
  },
  {
    name: "Sagar",
    age: 23,
    admin: true,
    address: {
      city: "ktm",
      state: "bagmati",
    },
    gender: "male",
  },
];
var teacher = {
  name: "samson",
  age: 39,
  admin: true,
  address: {
    city: "ktm",
    state: "bagmati",
  },
};
var teachersData = {
  teachersList: [
    {
      name: "samson",
      age: 34,
      admin: true,
      address: {
        city: "ktm",
        state: "Bagmati",
      },
    },
    {
      name: "sagar",
      age: 34,
      admin: true,
      address: {
        city: "ktm",
        state: "Bagmati",
      },
    },
  ],
  success: true,
};
var initialCartState = {
  Items: [
    {
      product: {
        id: 3,
        name: "string",
        price: 4,
      },
      quantity: 4,
    },
  ],
};
var patient = {
  id: 2,
  name: "string",
  room: 3,
  isAdmited: false,
  address: [
    {
      city: "ktm",
      state: "Baagmati",
    },
  ],
};
var patientsState = {
  patients: [
    {
      patientList: [
        {
          id: 2,
          name: "strinf",
          room: 2,
          isAdmited: false,
          // address: ["ktm"], // if <string>
          address: [
            {
              city: "ktm",
              state: "bagmati",
            },
          ],
        },
      ],
      totalPatient: 4,
    },
  ],
};
var patientsState2 = {
  patients: [
    {
      patientList: [
        {
          id: 2,
          name: "string",
          room: 3,
          isAdmited: false,
          address: [
            {
              city: "string",
              state: "string",
              phone: 98565690, // <string><boolean><object> etc are not allowed // only <numbe> and <any> are allowded
            },
          ],
        },
      ],
      totalPatient: 2,
    },
  ],
};
console.log(patientsState2);
// ================================================================================================
