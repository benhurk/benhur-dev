import { animate, inView } from 'motion';
import loadComponents from './loadComponents';
import { PAGES } from './consts/consts';

const wraper = document.getElementById('content');

export default async function loadContent(page) {
    page = page.split('/')[1] || 'home';

    try {
        if (!PAGES.includes(page)) throw new Error('Page not found.');
        const res = await fetch(`/pages/${page}.html`);

        const html = await res.text();

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
