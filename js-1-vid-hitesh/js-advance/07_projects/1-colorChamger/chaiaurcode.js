const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");


//way-1
/*buttons.forEach(function(button){
console.log(button);
button.addEventListener("click",function(event){
console.log(event);
console.log(event.target.id);
switch (event.target.id) {
    case "blue":
        body.style.backgroundColor="blue";
        break;
    case "yellow":
        body.style.backgroundColor="yellow";
        break;  
    case "white":
        body.style.backgroundColor="white";
        break;
    case "grey":
        body.style.backgroundColor="grey";
        break;      

    default:
        break;
}
// body.style.backgroundColor="blue";
})

})*/

//way-2

buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
        body.style.backgroundColor=e.target.id;
    })
})

