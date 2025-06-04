import './TechStack.css';

const FULLSTACK = [
    { name: 'Next.js', logo: './next.svg' },
    { name: 'TypeScript', logo: './typescript.svg' },
    { name: 'JavaScript', logo: './javascript.svg' },
];

const FRONTEND = [
    { name: 'React', logo: './react.svg' },
    { name: 'Tailwind CSS', logo: './tailwind.svg' },
    { name: 'Vite', logo: './vite.svg' },
    { name: 'HTML', logo: './html.svg' },
    { name: 'CSS', logo: './css.svg' },
    { name: 'Sass / Scss', logo: './sass.svg' },
];

const TEST = [
    { name: 'Cypress', logo: './cypress.svg' },
    { name: 'Jest', logo: './jest.svg' },
];

const BACKEND = [
    { name: 'Node.js', logo: './node.svg' },
    { name: 'PostgreSQL', logo: './postgresql.svg' },
];

function generateHTML(array) {
    return array
        .map(
            (tech) => `
        <div class="tech">
            <span class="tech-name">${tech.name}</span>
            <img src="${tech.logo}" alt="${tech.name}" />
        </div>
        `
        )
        .join('');
}

export function TechStack() {
    document.querySelector('#fullstack').innerHTML = generateHTML(FULLSTACK);
    document.querySelector('#frontend').innerHTML = generateHTML(FRONTEND);
    document.querySelector('#test').innerHTML = generateHTML(TEST);
    document.querySelector('#backend').innerHTML = generateHTML(BACKEND);
}
