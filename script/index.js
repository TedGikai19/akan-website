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
        event.preventDefault()

    })
     })
