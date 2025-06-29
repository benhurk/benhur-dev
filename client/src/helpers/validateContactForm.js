export default function validateContactForm(email, message, honey) {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (honey) {
        return { success: false };
    }

    if (!email) {
        return { success: false, message: 'Insira seu email.' };
    }

    if (!emailRegex.test(email))
        return { success: false, message: 'Email inválido.' };

    if (!message) {
        return { success: false, message: 'Escreva uma mensagem.' };
    }

    return { success: true };
}
