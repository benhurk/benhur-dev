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

    nav(activeSection);
    loadComponents(activeSection);
});
