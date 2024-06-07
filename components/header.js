function genereEntete() {

    let entete = document.createElement("header");
    let nav = document.createElement("nav");
    let logoContainer = document.createElement("div");
    let navBar = document.createElement("ul");


    entete.classList.add("container", "d-flex", "justify-content-center", "align-items-center");
    nav.classList.add("navbar", "navbar-expand-lg", "w-100", "d-flex", "justify-content-between");
    logoContainer.classList.add("navbar-brand");
    navBar.classList.add("navbar-nav", "flex-row", "ml-auto");

    let main = document.querySelector('main');
    document.body.insertBefore(entete, main);

    entete.appendChild(nav);
    nav.appendChild(logoContainer);
    nav.appendChild(navBar);

    function createNavItem(id, href, textContent, classes = []) {
        let navItem = document.createElement("li");
        navItem.classList.add("nav-item", "m-1");
        navItem.id = `navItem${id}`;

        let link = document.createElement("a");
        link.setAttribute("href", href);
        link.textContent = textContent;
        link.classList.add(...classes, "p-1");
        navItem.appendChild(link);
        navBar.appendChild(navItem);
    }
    createNavItem(2, "./index.html", "Acceuil", ["btn", 'btn-primary', "navbar-nav"]);
    createNavItem(3, "./about.html", "A propos", ["btn", 'btn-primary', "navbar-nav"]);
    createNavItem(4, "./contact.html", "Contacte", ["btn", 'btn-primary', "navbar-nav"]);
    createNavItem(5, "./project.html", "Mes projets", ["btn", 'btn-primary', "navbar-nav"]);

}
genereEntete();

window.onload = function () {
    addBootsrapCSS();
    addBootsrapJs();
}

function addBootsrapCSS() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    link.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
}

function addBootsrapJs() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
}