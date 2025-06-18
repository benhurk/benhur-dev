import loadContent from './loadContent';

const navButtons = document.querySelectorAll('#nav-links a');

export default function nav() {
    navButtons.forEach((nav) => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = nav.getAttribute('href');

            if (targetSection != window.location.pathname) {
                window.history.pushState({}, '', targetSection);

                loadContent(targetSection);

                document
                    .querySelector('.nav-current')
                    .classList.remove('nav-current');

                nav.classList.add('nav-current');
            }
        });
    });
}
