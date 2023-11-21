

//curly braces is known as scope
var c=1000;
console.log(c);
if(true){
    let a=10;
    const b=20;
    var c=30;
}
//a and b wont be accessable from outside the scope but c will be accessable. Thats why we should try to avoid var as it might create confusion as c is declared 2 times and value of c keeps changing
// console.log(a);
// console.log(b);
console.log(c);

// code inside curly braces that is considered its own block scope
//code outside curly braces is called global scope and they can be access everywhere.

let d=100;
if(true){
    // let d=10;
    let e=200;
    console.log("d:",d);
    console.log("e:",e);
}
//will throw error as e has blok scope and cant be ccessed outside its scope area
//console.log("e:",e);


//adult cant borrow from kids but kids can borrow from adult. similarly two() can acess one() properties but one() cant access two() properties.

function one(){
    const username="anshuman";
    function two(){
        //username can be accessed as username is global scope for two()
        const website="youtube";
        console.log(username);
    }
    //will throw error as websit cant be accessed because its out of scope of one()
    // console.log(website);
    two();
}
one();
/* -------------------------------------*/
if(true){
    const username="hitesh";
    if(username==="hitesh"){
        const website=" youtube";
        console.log(username+website);
    }
    //will throw error as website is block scope of nested if block
    // console.log(website);
    
}
//will throw error as username is block scope of if()
//console.log(username);
/* -------------------------------------*/

//hoistig example
console.log(addone(5));
function addone(num){
return num+1;
}

//will throw error :Cannot access 'addtwo' before initialization. This error take plce as we along with function declaration , we hold it in a variable   
/*console.log(addtwo(5));
const addtwo=function(num){
return num+1;
}*/

