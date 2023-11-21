//function defination
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
}
//function reference
//sayMyName

//function execution
sayMyName();

function addTwoNumbers(number1,number2){
    console.log(number1+number2); 
}
addTwoNumbers(23,32);
function addTwoNumbersAgain(number1,number2){
    return number1+number2; 
}
const result=addTwoNumbersAgain(12,32);
console.log("Result is: ",result);

function loginUserMessage(username="Sam"){
     if(username===undefined){
       
        console.log("please enter a username");
    }else{
        return `${username} just logged in`
    }
    
}
console.log(loginUserMessage());
// console.log(loginUserMessage("Anshuman"));
console.log(!undefined);


//rest and spread operator both uses ...   .For rest ... means combine and return back
//we used rest oprator in front of nums
function calculateCartPrice(...nums){
return nums;
}
console.log(calculateCartPrice(100,200,300,400));

function calculateCartPrice1(val1,val2,...nums1){
    return nums1;
}
console.log(calculateCartPrice1(100,200,300,400));
 
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
console.log(`username:${anyObject.username} and price:${anyObject.price}`);
}
handleObject(user);
handleObject({
    username:"ankit",
    price:189  
});

const myNewArray=[100,200,300,400];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,11,12,13]));