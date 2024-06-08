function genereEntete() {
    let entete = document.createElement("header");
    let nav = document.createElement("nav");
    let logoContainer = document.createElement("div");
    let navBar = document.createElement("ul");
    let navbarToggler = document.createElement("button");
    let navbarCollapse = document.createElement("div");
    let togglerIcon = document.createElement("span");
    let main = document.querySelector('main');

    entete.classList.add("bg-dark", "w-100", "p-1", "header-custom", );
    entete.style.width = "100%";
    nav.classList.add("navbar", "navbar-expand-lg", "container-fluid", "d-flex", "justify-content-between");
    logoContainer.classList.add("navbar-brand");
    navBar.classList.add("navbar-nav", "ms-auto");
    navbarToggler.classList.add("navbar-toggler", "custom-toggler");
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
        let navItem = document.createElement("li");
        navItem.classList.add("nav-item");

        let button = document.createElement("a");

        button.classList.add("nav-link", "btn", ...classes, "m-1", "btn-custom", "text-center");

        button.id = `nav-${id}`;
        button.href = href;
        button.textContent = textContent;

        navItem.appendChild(button);
        navBar.appendChild(navItem);
    }

    const navButtons = [
        { id: 1, href: "./index.html", textContent: "Accueil" },
        { id: 2, href: "./about.html", textContent: "À propos" },
        { id: 3, href: "./contact.html", textContent: "Contact" },
        { id: 4, href: "./project.html", textContent: "Mes projets" }
    ];

    navButtons.forEach(button => {
        createNavButton(button.id, button.href, button.textContent, []);
    });
}

genereEntete();

window.onload = function () {
    addBootsrapCSS();
    addBootsrapJs();
    addCss()
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

function addCss() {
    let head = document.querySelector("head");
    let cssLink = document.createElement("link");
    cssLink.href = "./styles.css"
    cssLink.rel = "stylesheet"
    head.appendChild(cssLink)
}
