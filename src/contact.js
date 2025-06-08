const EMAIL_FORM = `
    <form action="https://formspree.io/f/mjkrygwl" method="POST">
        <label id="email-field">
            Seu email:
        <input type="email" name="email" placeholder="seu@email.com" />
        </label>
        <textarea name="message" placeholder="Digite sua mensagem aqui..."></textarea>
        <button type="submit">Enviar</button>
    </form>
`;

const WPP_FORM = `
    <form>
        <textarea name="message" placeholder="Digite sua mensagem aqui..."></textarea>
        <button type="submit">Enviar</button>
    </form>
`;

export default function contact() {
    let selectedRadio = document.querySelector(
        'input[name="platform"]:checked'
    );

    const generateHTML = () => {
        if (selectedRadio.value === 'email') {
            document.getElementById('contact-wraper').innerHTML = EMAIL_FORM;
        }

        if (selectedRadio.value === 'whatsapp') {
            document.getElementById('contact-wraper').innerHTML = WPP_FORM;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        generateHTML();
    });

    document.querySelectorAll('input[name="platform"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            selectedRadio = e.target;
            generateHTML();
        });
    });
}
