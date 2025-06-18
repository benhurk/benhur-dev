import emailPost from '../../helpers/emailPost';
import validateContactForm from '../../helpers/validateContactForm';
import renderForm from './renderForm';
import { WPP_NUM } from '../../consts/consts';

export default function ContactForm() {
    let selectedRadio = document.querySelector(
        'input[name="platform"]:checked'
    );

    async function handleSubmit(e) {
        e.preventDefault();

        if (selectedRadio.value === 'email') {
            const formData = new FormData(e.target);
            const data = {
                email: formData.get('email'),
                name: formData.get('name'),
                message: formData.get('message'),
            };

            const validate = validateContactForm(
                data.email,
                data.message,
                data.name
            );

            if (validate.success) {
                await emailPost(data);
                e.target.reset();
            } else {
                const resultP = document.getElementById('contact-result');
                resultP.style.display = 'block';
                resultP.textContent = validate.message || '';
                resultP.className = 'fail';
            }
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

    renderForm(selectedRadio.value, handleSubmit);

    document.querySelectorAll('input[name="platform"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            selectedRadio = e.target;

            //Remove existing event listener
            document
                .getElementById('contact-form')
                .removeEventListener('submit', handleSubmit);

            renderForm(selectedRadio.value, handleSubmit);
        });
    });
}
