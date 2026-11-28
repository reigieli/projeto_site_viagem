import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

// Permite requisições do seu frontend React (Vite)
app.use(cors());

// Rota para processar os dados da pesquisa
app.get('/pesquisar', (req, res) => {
    const { origem, destino, data } = req.query;

    console.log('Nova pesquisa recebida:');
    console.log(`De: ${origem} | Para: ${destino} | Data: ${data}`);

    // Retorna uma resposta em formato JSON para o React ler facilmente
    res.json({
        mensagem: 'Pesquisa recebida com sucesso pelo servidor Node.js!',
        dadosPesquisa: {
            origem,
            destino,
            data
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor backend a rodar na porta http://localhost:${port}`);
});