    //Creation des elements
    const footer = document.createElement("footer") ;
    const main = document.querySelector('main');
    const copyrightSection = document.createElement("section")
    const copyrightParagraph = document.createElement("p")

    //Ajout des classe et des attributs
    footer.classList.add("footer", "bg-dark", "text-white", "text-center",'w-100',"py-3", "mt-auto")


    //Ajout du text content
    copyrightParagraph.textContent = "© 2024 Vigneron Tristan. Tous droits réservés.";

    //Ajout dans l'arboresence du dom
    

    footer.appendChild(copyrightSection);
    copyrightSection.appendChild(copyrightParagraph);
    main.insertAdjacentElement('afterend', footer);