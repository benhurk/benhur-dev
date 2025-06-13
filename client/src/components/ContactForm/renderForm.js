import './ContactForm.css';

const EMAIL_FORM = `
    <form id="contact-form">
        <label id="email-field">
            Seu email:
            <input type="email" name="email" placeholder="email@exemplo.com" />
        </label>
        <label id="name-field">
            Seu nome:
            <input type="text" name="name" placeholder="Wink wink" />
        </label>
        <label id="message-field">
            Mensagem:
            <textarea name="message" placeholder="Sua mensagem..."></textarea>
        </label>
        <p id="contact-result"></p>
        <button id="contact-submit" type="submit">Enviar</button>
        <div id="contact-loader"></div>
    </form>
`;

const WPP_FORM = `
    <form id="contact-form">
        <label id="message-field">
            Mensagem:
            <textarea name="message" placeholder="Sua mensagem..."></textarea>
        </label>
        <button id="contact-submit" type="submit">Abrir WhatsApp</button>
    </form>
`;

export default function renderForm(form, handleSubmit) {
    const existingFormMessage = document.querySelector(
        'textarea[name="message"]'
    )?.value;

    if (form === 'email' || !form) {
        document.getElementById('contact-wraper').innerHTML = EMAIL_FORM;
    }

    if (form === 'whatsapp') {
        document.getElementById('contact-wraper').innerHTML = WPP_FORM;
    }

    if (existingFormMessage) {
        document.querySelector('textarea[name="message"]').value =
            existingFormMessage;
    }

    document
        .getElementById('contact-form')
        .addEventListener('submit', handleSubmit);
}
