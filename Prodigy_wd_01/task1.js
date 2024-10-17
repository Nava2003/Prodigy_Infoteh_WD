window.addEventListener("scroll",function(){
    var navContainer = document.querySelector(".nav-container")
    if(window.scrollY>50){
        navContainer.style.background="blue"
    }
    else{
        navContainer.style.background="black"
    }
})
var homes = document.getElementById("home")
function home(){
    homes.style.display="block"
    homes.style.opacity=1
    homes.classList.add("disco")
    homes.style.border ="20px outset magenta"
    homes.style.borderRadius="40px"
    setTimeout(function(){
        homes.classList.remove("disco")
        abouts.style.display="none"
    },2000)


}
var abouts = document.getElementById("about")
function about(){
    abouts.style.display ="block"
    abouts.style.opacity = 1
    abouts.classList.add("disco")
    abouts.style.border ="20px outset cornflowerblue"
    abouts.style.borderRadius="40px"

    setTimeout(function(){
        homes.style.display="none"
        abouts.classList.remove("disco")
      
    }, 2000)
}
var services = document.getElementById("services")
function service(){
    services.style.display="block"
    services.style.opacity=1
    services.classList.add("disco")
    services.style.border="20px outset moccasin"
    services.style.borderRadius="40px"
    setTimeout(function(){
        homes.style.display="none"
        abouts.style.display="none"
    
        services.classList.remove("disco")
    }, 2000)
}
var contacts = document.getElementById("contact")
function contact(){
    contacts.style.display="block"
    contacts.style.opacity=1
    contacts.classList.add("disco")
    contacts.style.border="20px outset darkorchid"
    contacts.style.borderRadius="40px"
    setTimeout(function(){
        contacts.classList.remove("disco")
        homes.style.display="none"
        abouts.style.display="none"
        services.style.display="none"
    },2000)
}