const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const menuButton = document.querySelector('#menu');
const filterLinks = document.querySelectorAll('nav a[data-filter]');
const templeGrid = document.querySelector('.temple-grid');

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/jordan-river-temple-daylight-148187-2x.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 10890,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/asuncion-paraguay-temple-230983-wallpaper.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 24",
        area: 27958,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-84384-wallpaper.jpg"
    }
];

function createTempleCard(temple) {
    const figure = document.createElement('figure');
    figure.classList.add('temple-card');

    const dedicationYear = new Date(temple.dedicated).getFullYear();
    let templeType = '';
    
    if (dedicationYear < 1900) {
        templeType += 'old ';
    } else if (dedicationYear > 2000) {
        templeType += 'new ';
    }

    if (temple.area < 10000) {
        templeType += 'small';
    } else if (temple.area > 90000) {
        templeType += 'large';
    }

    figure.setAttribute('data-temple-type', templeType.trim());

    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;

    const pLocation = document.createElement('p');
    pLocation.innerHTML = `**Location:** ${temple.location}`;
    
    const pDedicated = document.createElement('p');
    pDedicated.innerHTML = `**Dedicated:** ${temple.dedicated}`;
    
    const pArea = document.createElement('p');
    pArea.innerHTML = `**Size:** ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = 'lazy';
    img.width = 400;
    img.height = 250; 
    
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = temple.templeName;

    figure.appendChild(h3);
    figure.appendChild(pLocation);
    figure.appendChild(pDedicated);
    figure.appendChild(pArea);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

function displayTemples(filteredTemples) {
    templeGrid.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        templeGrid.appendChild(card);
    });
}

function filterTemples(filter) {
    let filteredTemples = [];

    switch (filter) {
        case 'old':
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
        case 'home':
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.querySelector('#currentyear');
    const lastModified = document.querySelector('#lastmodified');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
    
    filterTemples('home');
});

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuButton.classList.toggle('show');
});

filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute('data-filter');
        filterTemples(filter);
        
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuButton.classList.remove('show');
        }
    });
});