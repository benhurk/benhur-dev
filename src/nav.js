const navButtons = document.querySelectorAll('#nav-links a');

export default function nav() {
    navButtons.forEach((nav) => {
        nav.addEventListener('click', (e) => {
            const targetSection = nav.dataset.section;

            document.querySelectorAll('main > section').forEach((section) => {
                if (section.id === targetSection) {
                    section.classList.add('active-section');
                } else {
                    section.classList.remove('active-section');
                }
            });

            navButtons.forEach((other) => {
                other.classList.remove('current');
            });

            nav.classList.add('current');
        });
    });
}
