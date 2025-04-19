let button = document.getElementById("btn")
button.addEventListener("mouseover", function(){
    button.style.color = "red"
    button.addEventListener("mouseleave",function(){
    button.style.color = "black"
    button.addEventListener("click",function(){
        alert("Thank you for submitting")})
    })
    button.addEventListener("Submit",function(event){
        alert("Submit")
        event.preventDefault()})
     })
     function generateAkanName() {
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.getElementById("gender").value;
        
        if (!birthdate) {
            alert("Please enter your birthdate.");
            return;
        }
    
        const date = new Date(birthdate);
        const dayOfWeek = date.getDay();
    
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kofi", "Kwame", "Kwesi"];
        const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Afia", "Ama", "Akua"];
    
        let name = "";
    
        if (gender === "male") {
            name = maleNames[dayOfWeek];
        } else if (gender === "female") {
            name = femaleNames[dayOfWeek];
        }
    
        document.getElementById("akan-name").textContent = `Your Akan Name is: ${name}`;
    }
     
 

    


 