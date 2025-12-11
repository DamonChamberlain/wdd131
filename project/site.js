const resources = [
    { title: "html essentials", topic: "html", level: "beginner", link: "index.html#html", description: "quick reference for semantic tags and structure." },
    { title: "flexbox vs grid", topic: "css", level: "intermediate", link: "index.html#css", description: "when and how to use modern css layout." },
    { title: "js array methods", topic: "javascript", level: "intermediate", link: "index.html#js", description: "must-know array methods like map, filter, and reduce." },
    { title: "form validation", topic: "javascript", level: "beginner", link: "contact.html", description: "basic form checks using js and html5 attributes." }
];

function initializePage() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastVisit = localStorage.getItem('lastVisitDate');
    const welcomeMessageElement = document.getElementById('welcome-message');

    if (welcomeMessageElement) {
        if (lastVisit) {
            welcomeMessageElement.textContent = `welcome back! your last visit was on ${lastVisit}.`;
        } else {
            welcomeMessageElement.textContent = `hello! welcome to the coder's compass, your first time here!`;
        }
    }

    localStorage.setItem('lastVisitDate', new Date().toLocaleDateString());

    if (document.getElementById('resources-grid')) {
        renderResources(resources);
    }
}

function renderResources(data) {
    const grid = document.getElementById('resources-grid');
    if (!grid) return;

    const resourceHtml = data.map(resource => {
        return `
            <div class="card">
                <h3>${resource.title}</h3>
                <p>topic: ${resource.topic} | level: ${resource.level}</p>
                <p>${resource.description}</p>
                <a href="${resource.link}" class="cta-button">read guide</a>
            </div>
        `;
    }).join('');

    grid.innerHTML = resourceHtml;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const topic = form.elements.topic.value;
    const message = form.elements.message.value.trim();
    const output = document.getElementById('message-output');

    let responseMessage = '';
    let isValid = true;

    if (name.length < 2) {
        responseMessage += 'error: please enter your full name.\n';
        isValid = false;
    }
    if (topic === 'none') {
        responseMessage += 'error: please select a topic.\n';
        isValid = false;
    }
    if (message.length < 10) {
        responseMessage += 'error: your message must be at least 10 characters long.\n';
        isValid = false;
    }
    
    if (isValid) {
        responseMessage = `
            thank you, ${name}! your message has been received.

            we will get back to you soon regarding your request about: 
            -> ${topic}.

            your full message:
            "${message}"

            (note: this is a client-side display only.)
        `;

        form.reset();
    } else {
        responseMessage = `oops! please fix the following issue(s):\n\n${responseMessage}`;
    }

    output.textContent = responseMessage;
}

document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});