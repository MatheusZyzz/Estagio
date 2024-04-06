const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Use o middleware cors

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '03101989Pk',
    database: 'objetivo'
});

// Conexão com o banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem sucedida com o banco de dados MySQL');
});

// Rota para receber os dados do formulário
app.post('/api/cadastro', (req, res) => {
    const { nome, email } = req.body;

    // Verifica se nome e email foram enviados
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios' });
    }

    // Validação de e-mail simples
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Por favor, insira um email válido' });
    }

    // Inserir os dados na tabela do banco de dados
    const queryString = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    connection.query(queryString, [nome, email], (err, result) => {
        if (err) {
            console.error('Erro ao inserir os dados:', err);
            return res.status(500).json({ error: 'Erro interno do servidor ao inserir os dados' });
        }
        console.log('Dados inseridos com sucesso:', result);
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
    });
});

// Função para validar e-mail
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
