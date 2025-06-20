const URL = import.meta.env.DEV
    ? 'http://localhost:8080/send-email'
    : `${import.meta.env.VITE_SERVER_URL}/send-email`;

export default async function postEmail(data) {
    const resultP = document.getElementById('contact-result');
    const submitBtn = document.getElementById('contact-submit');
    const loader = document.getElementById('contact-loader');

    try {
        submitBtn.style.display = 'none';
        loader.style.display = 'block';

        const res = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (res.ok) {
            resultP.textContent = 'Mensagem enviada! Retornarei em breve.';
            resultP.className = 'success';
        } else {
            throw new Error(result.message || 'Failed to send email.');
        }
    } catch (error) {
        console.error(error);
        resultP.textContent =
            error.message || 'Erro ao enviar mensagem. Tente novamente.';
        resultP.className = 'fail';
    } finally {
        submitBtn.style.display = 'block';
        loader.style.display = 'none';
        resultP.style.display = 'block';
    }
}
