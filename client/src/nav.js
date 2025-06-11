const navButtons = document.querySelectorAll('#nav-links a');

export default function nav() {
    navButtons.forEach((nav) => {
        nav.addEventListener('click', () => {
            const targetSection = nav.dataset.section;

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
