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
     
 // Akan names
 const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 // Assign Akan name
 let akanName = "";
 if (gender === 'male') {
     akanName = maleNames[dayOfWeekFinal];
 } else {
     akanName = femaleNames[dayOfWeekFinal];
 }

 // Display result
 document.getElementById('akanName').textContent = akanName;
 document.getElementById('result').style.display = 'block';