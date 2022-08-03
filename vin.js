//question 1

//nested callbacks stacked below one another forming a pyramid structure
//callback is same as callback hell callback hell nasted function. it is pyrimid structure. 

//craeat a callback hell where it will number from 1 to 5;

function printNumber(){
    setTimeout(() => {
   console.log('vinayak');
       setTimeout(() => {
        console.log('disha');
        setTimeout(() => {
            console.log('rani');
            setTimeout(() => {
               console.log('vishal'); setTimeout(() => {
                console.log('frat');
               }, 5000);

            }, 4000);
        }, 3000);
       }, 2000); 
    }, 1000);
}
printNumber();


//Question 2
//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

//Question 3


 let data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('vinayak');
     //  reject('some issue')
    },2000)

})
data.then((item)=>{
  console.log(item);
})
data.catch((err) =>{
  console.log('catch block',err);
})
//console.log(data);

//question4


//The async keyword turns a method into an async method, which allows you to use the await keyword in its body. When the await keyword is applied, it suspends the calling method and yields control back to its caller until the awaited task is complete. await can only be used inside an async method.


//QUESTION 5
async function f() {
  return 1;
}

f().then(alert); // 1


//Question 6

//What is hoisting?
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

//Hoisting allows functions to be safely used in code before they are declared.


var a = 10
console.log(a);
var b = 20 


var a;
a = 10
var b;
console.log(a); // 10 
b = 20;

//console.log(b); // undefined//

// A  variable can be used before it has been declared
a = 10;
console.log(a);
var a;

// only variable declaration are hoisted to the top not variable initialise 


//Question 7

//The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.


//1 document.getElementByid
//2 document.getElements Byclass
//3document.getElementbyTAg NAME 
//4 document.querryselectors


//Question 8

//The undefined property indicates that the variable has not been assigned a value or not declared at all. The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number.


//Question 9

//1)Arithmetic operators, 
//2)Comparison operators, 
//3)Logical operators,
//4)Assignment operators, 
//5)Conditional operators.
//6)betwise operators.

//Question 10
//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.

function add(){
  return a * b
}
add(2,3);

//Question 11 
//is introduce Es6 javascript // arrow function 
const a = ()=>{
  return a*b
}
console.log(a(2,3));

