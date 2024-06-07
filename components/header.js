function genereEntete() {
    let entete = document.createElement("header");
    let nav = document.createElement("nav");
    let logoContainer = document.createElement("div");
    let navBar = document.createElement("div");
    let navbarToggler = document.createElement("button");
    let navbarCollapse = document.createElement("div")
    let togglerIcon = document.createElement("span")
    let main = document.querySelector('main');

    entete.classList.add("bg-primary", "w-100", "flex-grow-1");
    entete.style.width = "100%";
    nav.classList.add("navbar", "navbar-expand-lg", "container-fluid", "d-flex", "justify-content-between");
    logoContainer.classList.add("navbar-brand");
    navBar.classList.add("navbar-nav", "flex-row", "ms-auto");
    navbarToggler.classList.add("navbar-toggler");
    togglerIcon.classList.add("navbar-toggler-icon");

    navbarToggler.setAttribute("type", "button");
    navbarToggler.setAttribute("data-bs-toggle", "collapse");
    navbarToggler.setAttribute("data-bs-target", "#navbarNav");
    navbarToggler.setAttribute("aria-controls", "navbarNav");
    navbarToggler.setAttribute("aria-expanded", "false");
    navbarToggler.setAttribute("aria-label", "Toggle navigation");

    navbarCollapse.id = "navbarNav";
    navbarCollapse.classList.add("collapse", "navbar-collapse");

    document.body.insertBefore(entete, main);
    entete.appendChild(nav);
    nav.appendChild(logoContainer);
    nav.appendChild(navbarToggler);
    nav.appendChild(navbarCollapse);
    navbarCollapse.appendChild(navBar);
    navbarToggler.appendChild(togglerIcon);
    
    function createNavButton(id, href, textContent, classes = []) {
        let button = document.createElement("button");
        button.classList.add("btn", ...classes, "m-1");
        button.id = `navButton${id}`;

        button.addEventListener("click", function() {
            window.location.href = href;
        });

        button.textContent = textContent;
        navBar.appendChild(button);
    }
    createNavButton(2, "./index.html", "Accueil", ["btn-primary", "border"]);
    createNavButton(3, "./about.html", "À propos", ["btn-primary", "border"]);
    createNavButton(4, "./contact.html", "Contact", ["btn-primary", "border"]);
    createNavButton(5, "./project.html", "Mes projets", ["btn-primary", "border"]);
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
