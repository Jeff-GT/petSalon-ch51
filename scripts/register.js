console.log("Register");
let pets=[];

//Object Literal
let pet1={
    name:"Winter",
    age:7,
    gender:"female",
    breed:"Samoyed"
}
let pet2={
    name:"Cinnamoroll",
    age:5,
    gender:"Male",
    breed:"Pitbull"
}

document.write(pet1.name);
document.write(pet2.name);

//push pets into the array

pets.push(pet1,pet2);


function displayNames(){
    
console.log("Total Pets = "+pets.length);

console.log(pets[0].name);
console.log(pets[1].name);
}

displayNames();