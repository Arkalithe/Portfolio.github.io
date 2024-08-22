function createElementWithAttributes(elementType, attributes=[], classes=[], text=''){
    const element = document.createElement(elementType);
    attributes.forEach(attr => element.setAttribute(attr.name, attr.value));
    element.classList.add(...classes);
    element.textContent = text;
    return element;
}

function addLinkToHead(url){
    const linkAttributes = [
        {name: 'rel', value: "stylesheet"},
        {name: 'href', value: url},
    ];
    const link = createElementWithAttributes("link", linkAttributes);
    document.head.appendChild(link);
}

function addScriptToBody(url){
    const scriptAttributes = [
        {name: 'src', value: url},
    ];
    const script = createElementWithAttributes("script", scriptAttributes);
    document.body.appendChild(script);
}

function generateHeader() {
    let main = document.querySelector('main');
    let entete = createElementWithAttributes("header", [], ["bg-dark", "w-100", "p-1", "header-custom"]);
    let nav = createElementWithAttributes("nav", [], ["navbar", "navbar-expand-lg", "container-fluid", "d-flex", "justify-content-between"]);
    let logoContainer = createElementWithAttributes("div", [], ["navbar-brand"]);
    let navbarToggler = createElementWithAttributes("button",
        [
            {name: "type", value: "button"},
            {name: "data-bs-toggle", value: "collapse"},
            {name: "data-bs-target", value: "#navbarNav"},
            {name: "aria-controls", value: "navbarNav"},
            {name: "aria-expanded", value: "false"},
            {name: "aria-label", value: "Toggle navigation"}
        ],
        ["navbar-toggler", "custom-toggler"],
        ''
    );
    let navbarCollapse = createElementWithAttributes("div", [{name: 'id', value: 'navbarNav'}], ["collapse", "navbar-collapse"]);
    let navBar = createElementWithAttributes("ul", [], ["navbar-nav", "ms-auto", 'bg-dark']);
    let togglerIcon = createElementWithAttributes("span", [], ["navbar-toggler-icon"]);

    //Ajout dans l'arboresence du dom
    document.body.insertBefore(entete, main);
    entete.appendChild(nav);
    nav.append(logoContainer, navbarToggler, navbarCollapse);
    navbarCollapse.appendChild(navBar);
    navbarToggler.appendChild(togglerIcon);

    function createNavButton(id, href, textContent, classes = []) {
        let navItem = createElementWithAttributes("li", [], ["nav-item"]);
        let classesArray = ["nav-link", "btn", ...classes, "m-1", "btn-custom", "text-center"];
        let button = createElementWithAttributes("a", [{name: 'id', value: `nav-${id}`}, {name: 'href', value: href}], classesArray, textContent);
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
//ajoute de bootstrap et de mon style
window.onload = function () {
    addLinkToHead("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    addScriptToBody("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    addLinkToHead("./styles.css");
    generateHeader();
}
