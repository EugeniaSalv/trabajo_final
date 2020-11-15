let navInicio = document.getElementById("navInicio");
let navInfo = document.getElementById("navInfo");
let navContacto = document.getElementById("navContacto");

let inicio = document.getElementById("inicio");
let info = document.getElementById("info");
let contacto = document.getElementById("contacto");

let github = document.getElementById("github");
let gmail = document.getElementById("gmail");
let linkedin = document.getElementById("linkedin");

function dirigirInfo() {
    info.scrollIntoView(true);
}

function dirigirContacto() {
    contacto.scrollIntoView(true);
}

function dirigirInicio() {
    inicio.scrollIntoView(true);
}

linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/eugenia-salvi-68b44614b");
});

gmail.addEventListener("click", function () {
    window.open("mailto:eugeniasalvivm@gmail.com");
});

github.addEventListener("click", function () {
    window.open("https://github.com/EugeniaSalv");
});

navInicio.addEventListener("click", dirigirInicio);
navInfo.addEventListener("click", dirigirInfo);
navContacto.addEventListener("click", dirigirContacto);

