function scrollleft() {
    var projectHolder = document.querySelector('.projectholder');
    projectHolder.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollright() {
    let projectHolder = document.querySelector('.projectholder');
    projectHolder.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

function home(){
    document.querySelector(".home").style.display = "flex";
}

function profiles(){
    document.querySelector(".profile").style.display = "flex";
}

function resume(){
    var link = document.createElement("a");
    link.href = "B.Navaneethakrishna.pdf";
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function project(){
    document.querySelector(".project").style.display="block"
}
function contact(){
    document.querySelector(".contact").style.display="block"
}