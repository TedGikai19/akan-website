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

     // Get user inputs
     const day = parseInt(document.getElementById('day').value);
     const month = parseInt(document.getElementById('month').value);
     const year = parseInt(document.getElementById('year').value);
     const gender = document.querySelector('input[name="gender"]:checked').value;
 
     // Validate inputs
     if (isNaN(day) || isNaN(month) || isNaN(year)) {
         alert('Please enter valid numbers for day, month, and year.');
         return;
     }
 
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