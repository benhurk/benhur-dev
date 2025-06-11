import emailPost from './helpers/emailPost';
import genContactForm from './helpers/html-gen/contact-form';

const WPP_NUM = '5547996825217';

export default function contact() {
    let selectedRadio = document.querySelector(
        'input[name="platform"]:checked'
    );

    async function handleSubmit(e) {
        e.preventDefault();

        if (selectedRadio.value === 'email') {
            const formData = new FormData(e.target);
            const data = {
                email: formData.get('email'),
                message: formData.get('message'),
            };

            await emailPost(data);
            e.target.reset();
        }

        if (selectedRadio.value === 'whatsapp') {
            const message = document.querySelector(
                'textarea[name="message"]'
            ).value;

            window.open(
                `https://wa.me/${WPP_NUM}?text=${encodeURI(message)}`,
                '_blank'
            );
        }
    }

    genContactForm(selectedRadio.value, handleSubmit);

    document.querySelectorAll('input[name="platform"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            selectedRadio = e.target;

            //Remove existing event listener
            document
                .getElementById('contact-form')
                .removeEventListener('submit', handleSubmit);

            genContactForm(selectedRadio.value, handleSubmit);
        });
    });
}
