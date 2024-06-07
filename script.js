// Fonction pour charger le fichier XML avec fetch
async function loadXMLDoc(filename) {
    try {
        const response = await fetch(filename);
        const text = await response.text();
        const parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
    } catch (error) {
        console.error(error);
    }

}

// Fonction pour afficher les livres
function displayBooks(xml) {
    const books = xml.getElementsByTagName("livre");
    const container = document.getElementById("book-list");
    const body = document.getElementsByTagName('body')[0];
    body.className = 'container text-center align-items-center';
    container.className = 'row justify-content-evenly'
    container.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const title = book.getElementsByTagName('titre')[0].textContent;
        const author = book.getElementsByTagName('auteur')[0].textContent;
        const page = book.getElementsByTagName('page')[0].textContent;
        const isbn = book.getElementsByTagName('isbn')[0].textContent;
        const language = book.getElementsByTagName('langue')[0].textContent;
        const genres = book.getElementsByTagName('genres');
        const resume = book.getElementsByTagName('resume')[0].textContent;

        for (let j = 0; j < genres.length; j++) {
            const genre = genres[j];
            const genreSingulier = genre.getElementsByTagName("genre");

            for (let k = 0; k < genreSingulier.length; k++) {
                const g = genreSingulier[k];
            }
        }


        // initialisation de la carte
        const card = document.createElement("div");
        card.className = "card col-5 mb-3 bg-secondary text-light text-start";

        //carte body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body ";

        const cardTitle = document.createElement("h4");
        cardTitle.className = "card-title ";
        cardTitle.textContent = `Titre: ${title}`;

        const cardAuthor = document.createElement('p');
        cardAuthor.className = 'card-text';
        cardAuthor.textContent = `Auteur: ${author}`;

        const cardPage = document.createElement('p');
        cardPage.className = 'card-text';
        cardPage.textContent = `Nombre de page: ${page}`;

        const cardIsbn = document.createElement('p');
        cardIsbn.className = 'card-text';
        cardIsbn.textContent = `Isbn: ${isbn}`;

        const cardLanguage = document.createElement('p');
        cardLanguage.className = 'card-text';
        cardLanguage.textContent = `Langue: ${language}`;

        const button = document.createElement("button");
        button.className = 'btn btn-primary bouton';
        button.textContent = 'Lire plus';
        

        const readMore = document.createElement('div');
        readMore.className = "position-absolute top-80 start-50 d-none popup bg-danger text-center";
        readMore.textContent = resume;
        cardBody.appendChild(readMore);

        button.addEventListener('click', event => {
            readMore.classList.toggle("d-none");
        })
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardAuthor);
        cardBody.appendChild(cardPage);
        cardBody.appendChild(cardIsbn);
        cardBody.appendChild(cardLanguage);
        cardBody.appendChild(cardAuthor);
        cardBody.appendChild(button);
        card.appendChild(cardBody)
        container.appendChild(card);
    }
}

// Charger et afficher les livres au chargement de la page
window.onload = function () {
    loadXMLDoc("books.xml")
        .then(displayBooks)
        .catch(function (error) {
            console.error(error);
        });
    addBootsrapCSS();
    addBootsrapJs();
};

//Ajout bootstrap CSS et JS
function addBootsrapCSS() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    link.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
}

function addBootsrapJs() {
    var script = document.createElement("link");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
}