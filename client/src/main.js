import nav from './nav';
import contact from './contact';
import genTechStack from './helpers/html-gen/tech-stack';

document.addEventListener('DOMContentLoaded', () => {
    const activeSection = window.location.hash.substring(1);

    if (activeSection) {
        document.getElementById(activeSection).classList.add('active-section');
        document
            .querySelector(`#nav-links a[data-section="${activeSection}"]`)
            .classList.add('nav-current');
    } else {
        //Apply class for the first element
        document
            .querySelector('main > section')
            .classList.add('active-section');
        document.querySelector('#nav-links a').classList.add('nav-current');
    }

    genTechStack();
    contact();
});

nav();
