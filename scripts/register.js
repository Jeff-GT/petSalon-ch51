console.log("Register");
let pets=[];

//Object Literal
let pet1={
    name:"Winter",
    age:7,
    gender:"female",
    service: "Haircut",
    breed:"Samoyed"
}
let pet2={
    name:"Cinnamoroll",
    age:5,
    gender:"Male",
    service: "Bath",
    breed:"Pitbull"
}
let pet3={
    name:"Chimera",
    age:5,
    gender:"Female",
    service: "De-shedding",
    breed:"Pitbull"
}



//push pets into the array

pets.push(pet1,pet2,pet3);

console.log("Total Pets = "+pets.length);

function displayNames(){
    
    for(counter=0;counter<pets.length;counter++){
        document.getElementById("PetRegistry").innerHTML+=`<div>
        
        <p>${pets[counter].name}</p>
        
        </div>`
    }
}

displayNames();






















