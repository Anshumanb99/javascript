const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};
const obj5={7:"g",8:"h"}
const obj3=Object.assign({},obj1,obj2,obj5);
const obj4={...obj1,...obj2,...obj5};
console.log(obj3);
console.log(obj4);

//database value fetching
const users=[
    {
    id:1,
    email:"one@gmail.com"
    },
    {
        id:2,
        email:"two@gmail.com"
    },
    {
        id:3,
        email:"tthree@gmail.com"
    },
]
console.log(users[0]);
console.log(users[1].id);

const tinderUser={
    id:"123abc",
    name:"sammy",
    isLoggedIn:false
}
console.log(tinderUser);

//it will store datatype of all the keys of the object in an array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//in order to avoid crash we use hasOwnProperty to check whether the property is available or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));

const course={
    coursename:"js in hindi",
    price:"9999",
    courseInstructor:"hitesh"

}

//destructuring the value
const {courseInstructor}=course;
console.log(courseInstructor);

//destructuring the value as per our intrest
const {courseInstructor:instructor}=course;
console.log(instructor);

