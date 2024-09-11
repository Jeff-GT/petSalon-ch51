/*function displayCards(){
    const CARDS=document.getElementById("show");
    CARDS.innerHTML="";
    for(let i=0;i<pets.length;i++){
        let pet=pets[i];
        console.log(pet);
        CARDS.innerHTML+=`<p><tr class="registered-info">
        <td>${pet.name}</td> 
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.petType}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        </tr></p>`
    }
}*/


function displayCards(){
    const CARDS=document.getElementById("show");
    for(let i=pets.length-1;i<pets.length;i++){
        let pet=pets[i];
        console.log(pet);
        CARDS.innerHTML+=`<p><tr class="registered-info">
        <td>${pet.name}</td> 
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.petType}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        </tr></p>`
    }
}


