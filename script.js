// Módulo de validação e envio de dados
const formCadastro = document.getElementById('formCadastro');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');

formCadastro.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // Evita que o formulário seja submetido da maneira padrão
    
    const nome = nomeInput.value;
    const email = emailInput.value;

    if (!isValidEmail(email)) {
        showAlert('Por favor, insira um email válido.');
        return;
    }

    const formData = { nome, email };
    enviarDadosParaAPI(formData);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function enviarDadosParaAPI(data) {
    fetch('http://localhost:3000/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados para a API');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
        showAlert('Dados enviados com sucesso!');
        limparFormulario();
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        showAlert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.');
    });
}

function showAlert(message) {
    alert(message);
}

function limparFormulario() {
    nomeInput.value = '';
    emailInput.value = '';
}
