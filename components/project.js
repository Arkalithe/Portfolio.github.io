
function setElementsDisplay(elements, display) {
    elements.forEach(element => {
        element.style.display = display;
    });
}

function addClasses(element, classes) {
    classes.forEach(cls => {
        element.classList.add(cls);
    });
}

function toggleDetails(id) {
    const details = document.getElementById(id);
    const cards = document.querySelectorAll('.card-project');
    const backButton = document.getElementById('back-button');
    const overlay = document.getElementById('overlay');

    if (overlay) {
        setElementsDisplay(cards, 'none');
        if (details) {
            details.style.display = 'block';
        }
        backButton.style.display = 'block';
        addClasses(overlay, ["d-flex" , "justify-content-center", 'align-items-center']);
    }
}

function goBack() {
    const details = document.querySelectorAll('.project-details');
    const cards = document.querySelectorAll('.card-project');
    const backButton = document.getElementById('back-button');
    const overlay = document.getElementById('overlay');

    if (overlay) {
        setElementsDisplay(details, 'none');
        setElementsDisplay(cards, 'block');
        backButton.style.display = 'none';
        overlay.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('.project-details');
    const backButton = document.getElementById('back-button');
    const overlay = document.getElementById('overlay');
    setElementsDisplay(details, 'none');
    backButton.style.display = 'none';
    overlay.style.display = 'none';
});