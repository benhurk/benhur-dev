import { animate, inView } from 'motion';

import { WPP_NUM } from './consts/CONSTS';
import loadComponents from './loadComponents';
import nav from './nav';

document.addEventListener('DOMContentLoaded', () => {
    const activeSection = window.location.hash.substring(1);

    if (activeSection) {
        document.getElementById(activeSection).classList.add('active-section');
        document
            .querySelector(`#nav-links a[data-section="${activeSection}"]`)
            .classList.add('nav-current');
    } else {
        //Apply nav classes for the first elements
        document
            .querySelector('main > section')
            .classList.add('active-section');
        document.querySelector('#nav-links a').classList.add('nav-current');
    }

    nav(activeSection || 'home');
    loadComponents(activeSection);

    document
        .getElementById('wpp-link')
        .setAttribute('href', `https://wa.me/${WPP_NUM}`);

    inView('section', (element) => {
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
});
