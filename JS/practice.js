//variables
//let , var, const
//output statement console.log()
//to check output ctrl+Alt+n

//object creation 
const customer = {
    id: 1001,
    name: "Seema",
    contactNo: [9845600809, 8456326534],
    email: "seema@gmail.com",
    password: "seema123"
};

console.log(typeof customer);//object
console.log(customer);
console.log(customer.contactNo[0]);//9845600809
//add element using push() and can remove using pop() 
customer.contactNo.push(9345678907);
console.log(customer.contactNo);//[ 9845600809, 8456326534, 93456789078 ]
//remove particular index element splice(start index,end index)
customer.contactNo.splice(1, 1);
console.log(customer.contactNo);//[ 9845600809, 93456789078 ]
console.log(customer.email);//seema@gmail.com

//Arrays
const numArry = ["One", "Two", "Three"];
console.log(numArry);

//spread operator (...) copy one array elements into another array
const numArry1 = [...numArry];
console.log(numArry1);

const numArry2 = ["Four", "Five", ...numArry];
console.log(numArry2);

const numArry3 = [...numArry, "Six", "Seven"];
console.log(numArry3);

const numArry4 = ["Four", "Five", ...numArry, "Six", "Seven"];
console.log(numArry4);

//function syntax :function functionName() {}
function swap(num1, num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(num1);
    console.log(num2);
}
swap(10, 20);

//function without input argument
function welcome() {
    return "Welcome to Capgemini!!";
}
console.log(welcome());

// Rest parameters(...) 
function add(n1, n2, ...ns) {
    var result = n1 + n2;
    for (let i = 0; i < ns.length; i++) {
        result += ns[i];
    }
    return result;
}
console.log(add(10, 20));//30
console.log(add(10, 20, 30));//60
console.log(add(10, 20, 30, 40));//100
console.log(add(10, 20, 30, 40, 50));//150

//Arrow functions
let isEven = (num) => (num % 2 == 0 ? true : false);
console.log(isEven(234)); // true

let add3 = (num1, num2, num3) => num1 + num2 + num3;
console.log(add3(10, 15, 20)); //45

let wel = () => "Welcome to Capgemini!!";
console.log(wel());

// Optional function parameters
function sub(num1, num2 = 10) {
    return num1 - num2;
}

console.log(sub(10)); //0
console.log(sub(100, 50)); //50
console.log();

// Object Destructuring
const { id, name, email, password } = customer;
console.log(id);//1001
console.log(email);//seema@gmail.com

//Array Destructuring

const [cont1, cont2] = customer.contactNo;
console.log(cont1);
console.log(cont2);

//class 
class Student {
    constructor(rollNo, stuName) {
        this.rollNo = rollNo;
        this.stuName = stuName;
    }
    getRollNo() {
        return this.rollNo;
    }
    getStuName() {
        return this.stuName;
    }
    setRollNo() {
        this.rollNo = rollNo;
    }
    setStuName() {
        this.stuName = stuName;
    }
}
//object creation
const stu1 = new Student(101, "Anu");
const stu2 = new Student(105, "Ram");

console.log(stu1.rollNo);
console.log(stu1.getStuName());

// map() - apply same function on all elements present in array
const numberArray = [10, 20, 30, 40, 50];

const sqArray = numberArray.map((num) => num * num);
console.log(sqArray);

// filter() - search based on condition

const greater = numberArray.filter((num) => num > 25);
console.log(greater);




