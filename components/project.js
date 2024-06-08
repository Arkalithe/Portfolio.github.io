function toggleDetails(id) {
    const details = document.getElementById(id);
    const cards = document.querySelectorAll('.card-project');
    const backButton = document.getElementById('back-button');
    const overlay = document.getElementById('overlay');

    if (overlay) {
        cards.forEach(card => {
            card.style.display = 'none';
        });

        if (details) {
            details.style.display = 'block';
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
        backButton.style.display = 'block';
        overlay.classList.add("d-flex" , "justify-content-center", 'align-items-center')

    } else {
        console.error('Element with id "overlay" not found.');
    }
}

function goBack() {
    const details = document.querySelectorAll('.project-details');
    const cards = document.querySelectorAll('.card-project');
    const backButton = document.getElementById('back-button');
    const overlay = document.getElementById('overlay');

    if (overlay) {
        details.forEach(detail => {
            detail.style.display = 'none';
        });

        cards.forEach(card => {
            card.style.display = 'block';
        });

        backButton.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        console.error('Element with id "overlay" not found.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('.project-details');
    const backButton = document.getElementById('back-button');
    const overlay = document.getElementById('overlay');

    details.forEach(detail => {
        detail.style.display = 'none';
    });

    backButton.style.display = 'none';
    overlay.style.display = 'none';
});