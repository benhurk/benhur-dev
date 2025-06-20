import { animate, inView } from 'motion';
import PAGES from './pages/pages';
import loadComponents from './loadComponents';

const wraper = document.getElementById('content');

export default function loadContent(page) {
    page = page.split('/')[1] || 'home';

    const html = PAGES[page];

    wraper.innerHTML = html;
    loadComponents(page);

    inView('main', (element) => {
        animate(
            element,
            { opacity: [0.5, 1] },
            {
                duration: 1,
                easing: 'easeIn',
            }
        );

        return () => animate(element, { opacity: 0.5 });
    });
}
