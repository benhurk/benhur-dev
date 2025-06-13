import loadComponents from './loadComponents';

const navButtons = document.querySelectorAll('#nav-links a');

export default function nav(initialSection) {
    const loadedSections = [initialSection];

    navButtons.forEach((nav) => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = nav.dataset.section;
            window.location.hash = targetSection;

            if (!loadedSections.includes(targetSection)) {
                loadedSections.push(targetSection);
                loadComponents(targetSection);
            }

            document
                .querySelector('.nav-current')
                .classList.remove('nav-current');

            document
                .querySelector('.active-section')
                .classList.remove('active-section');

            document
                .getElementById(targetSection)
                .classList.add('active-section');

            nav.classList.add('nav-current');
        });
    });
}
