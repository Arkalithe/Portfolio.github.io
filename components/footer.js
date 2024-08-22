    //Creation des elements
    document.addEventListener('DOMContentLoaded', (event) => {
        const main = document.querySelector('main');
        const footer = document.createElement("footer") ;
        const copyrightSection = document.createElement("section")
        const copyrightParagraph = document.createElement("p")


        footer.classList.add("footer", "bg-dark", "text-white", "text-center",'w-100',"py-3", "mt-auto")
        copyrightParagraph.textContent = "© 2024 Vigneron Tristan. Tous droits réservés.";

        if(main) {
            main.insertAdjacentElement('afterend', footer);
            footer.appendChild(copyrightSection);
            copyrightSection.appendChild(copyrightParagraph);
        } else {
            console.error('Main element is not found in the DOM');
        }
    });