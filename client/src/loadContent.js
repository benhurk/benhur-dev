import { animate, inView } from 'motion';
import homeHtml from '../public/pages/home.html?raw';
import projectsHtml from '../public/pages/projects.html?raw';
import contactHtml from '../public/pages/contact.html?raw';
import loadComponents from './loadComponents';

const PAGES = {
    home: homeHtml,
    projects: projectsHtml,
    contact: contactHtml,
};
const wraper = document.getElementById('content');

export default function loadContent(page) {
    page = page.split('/')[1] || 'home';

    try {
        if (!Object.keys(PAGES).includes(page))
            throw new Error('Page not found.');

        const html = PAGES[page];

        wraper.innerHTML = html;
        loadComponents(page);

        inView('main', (element) => {
            animate(
                element,
                { opacity: [0.5, 1] },
                {
                    duration: 0.5,
                    easing: [0.17, 0.55, 0.55, 1],
                }
            );

            return () => animate(element, { opacity: 0.5 });
        });
    } catch (error) {
        wraper.innerHTML = `<div class="container"><h1>${error.message}</h1></div>`;
    }
}
