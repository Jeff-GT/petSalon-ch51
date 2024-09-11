let pets=[];
//creat the contructor
//-----parameters(local)------

function Pet(name,age,gender,petType,breed,service) {
    //property=parameter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.petType=petType;
    this.breed=breed;
    this.service=service;
}



function register() {
    //input pet details
    let inputName=document.getElementById("txtName");
    let inputAge=document.getElementById("txtAge");
    let inputGender=document.querySelector('input[name="gender"]:checked');
    let inputPetType=document.querySelector('input[name="petType"]:checked');
    let inputBreed=document.getElementById("txtBreed");
    let inputService=document.getElementById("selectServices")
    
    petHolder=new Pet(inputName.value,inputAge.value,inputGender.value,inputPetType.value,inputBreed.value,inputService.value)
    pets.push(petHolder); //pushes pet inputs into array pets[]//


    for(let i=pets.length-1;i<pets.length;i++){ //displays newly added pet details.
        console.log(pets[pets.length-1])
        document.getElementById("show").innerHTML+=`<p><tr class="registered-info">
        <td>${pets[i].name}</td> 
        <td>${pets[i].age}</td>
        <td>${pets[i].gender}</td>
        <td>${pets[i].petType}</td>
        <td>${pets[i].breed}</td>
        <td>${pets[i].service}</td>
        </tr></p>`
    }

    /*clear out form*/{
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.querySelector('input[name="gender"]:checked').checked=false;
    document.querySelector('input[name="petType"]:checked').checked=false;
    document.getElementById("txtBreed").value="";
    document.getElementById("selectServices").value="";
    }
}


function init(){
    //injecting hard coded values for testing
let petHolder=new Pet("Damianne",7,"Female","Cat","Short Hair Siamese","Premium Care");
pets.push(petHolder);
petHolder=new Pet("Artemis",5,"Female","Cat","Short Hair Calico","Premium Care");
pets.push(petHolder);
petHolder=new Pet("Chimera",3,"Female","Cat","Long Hair Tortoishell","Premium Care"); 
pets.push(petHolder);

//displaying hard coded values for testing
for(let i=0;i<pets.length;i++){
    document.getElementById("show").innerHTML+=`<p><tr class="registered-info">
    <td>${pets[i].name}</td>
    <td>${pets[i].age}</td>
    <td>${pets[i].gender}</td>
    <td>${pets[i].petType}</td>
    <td>${pets[i].breed}</td>
    <td>${pets[i].service}</td>
    </tr></p>`
    }
}
window.onload=init;


//-----------------------------MISC fuctions--------------------------------


