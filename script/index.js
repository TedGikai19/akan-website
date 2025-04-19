let button = document.getElementById("btn")
button.addEventListener("mouseover", function(){
    button.style.color = "red"
    button.addEventListener("mouseleave",function(){
    button.style.color = "black"
    })
    
    })
