const contactForm = document.getElementById('contactForm');
const mensagemField = document.getElementById('mensagem');
const charCount = document.getElementById('charCount');
const formMessage = document.getElementById('formMessage');

if (mensagemField) {
    mensagemField.addEventListener('input', () => {
        charCount.textContent = `${mensagemField.value.length} / 300`;
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const idade = document.getElementById('idade').value.trim();
        const area = document.getElementById('area').value;
        const mensagem = mensagemField.value.trim();

        if (!nome || !email || !idade || !area || !mensagem) {
            showMessage('Por favor, preencha todos os campos antes de enviar.', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Por favor, use um e-mail válido.', 'error');
            return;
        }

        showMessage(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`, 'success');
        contactForm.reset();
        charCount.textContent = '0 / 300';
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
