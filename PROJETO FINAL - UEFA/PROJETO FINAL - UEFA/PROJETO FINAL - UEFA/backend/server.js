const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rotas para obter os dados das partidas e times
app.get('/api/matches', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao ler o arquivo de dados' });
        } else {
            const jsonData = JSON.parse(data);
            res.json(jsonData.matches);
        }
    });
});

app.get('/api/teams', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao ler o arquivo de dados' });
        } else {
            const jsonData = JSON.parse(data);
            res.json(jsonData.teams);
        }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
