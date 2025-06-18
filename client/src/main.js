import { WPP_NUM } from './consts/consts';
import nav from './nav';
import loadContent from './loadContent';

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.pathname || 'home';

    loadContent(initialPage);

    document
        .querySelector(`#nav-links a[href="${initialPage}"]`)
        .classList.add('nav-current');

    nav();

    document
        .getElementById('wpp-link')
        .setAttribute('href', `https://wa.me/${WPP_NUM}`);
});
