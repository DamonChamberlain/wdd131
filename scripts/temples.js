const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const menuButton = document.querySelector('#menu');
const filterLinks = document.querySelectorAll('nav a[data-filter]');
const templeCards = document.querySelectorAll('.temple-card');

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.querySelector('#currentyear');
    const lastModified = document.querySelector('#lastmodified');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuButton.classList.toggle('show');
});

filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute('data-filter');

        templeCards.forEach(card => {
            const templeType = card.getAttribute('data-temple-type');
            
            if (filter === 'home') {
                 card.style.display = 'block';
            } 
            else if (templeType && templeType.includes(filter)) {
                card.style.display = 'block';
            } 
            else {
                card.style.display = 'none';
            }
        });
    });
});