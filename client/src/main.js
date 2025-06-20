import { WPP_NUM } from './consts/consts';
import PAGES from './pages/pages';
import nav from './nav';
import loadContent from './loadContent';

document.addEventListener('DOMContentLoaded', () => {
    let initialPage = window.location.pathname || 'home';

    if (!Object.keys(PAGES).includes(initialPage.split('/')[1])) {
        window.history.replaceState({}, '', '/');
        initialPage = '/';
    }

    loadContent(initialPage);

    document
        .querySelector(`#nav-links a[href="${initialPage}"]`)
        .classList.add('nav-current');

    nav();

    document
        .getElementById('wpp-link')
        .setAttribute('href', `https://wa.me/${WPP_NUM}`);
});
