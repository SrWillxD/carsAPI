import express from 'express';
const app = express();

import brandWithMoreModels from './middlewares/brandWithMoreModels.js';
import brandWhitLessModels from './middlewares/brandWithLessModels.js';
import brandWithMoreModelsWithParameters from './middlewares/brandWithMoreModelsWithParameters.js';
import brandWithLessModelsWithParameters from './middlewares/brandWithLessModelsWithParameters.js';
import modelsOfACertainBrand from './middlewares/modelsOfACertainBrand.js';

const port = 3333;
app.use(express.json());

app.get('/marcas/maisModelos', (req, res)=>{
    res.json(brandWithMoreModels());
})

app.get('/marcas/menosModelos', (req, res)=>{
    res.json(brandWhitLessModels());
})

app.get('/marcas/listaMaisModelos/:amount', (req, res)=>{

    const amount = parseInt(req.params.amount);

    if (isNaN(amount) || !Number.isInteger(amount)) {
        return res.status(400).send('O parâmetro deve ser um número inteiro válido.');
    }

    res.json(brandWithMoreModelsWithParameters(amount));
})

app.get('/marcas/listaMenosModelos/:amount', (req, res)=>{

    const amount = parseInt(req.params.amount);

    if (isNaN(amount) || !Number.isInteger(amount)) {
        return res.status(400).json('O parâmetro deve ser um número inteiro válido.');
    }

    res.json(brandWithLessModelsWithParameters(amount));
})

app.post('/marcas/listaModelos', (req, res)=>{
    const { nomeMarca } = req.body;

    if(nomeMarca === undefined) {
        return res.status(400).send("O parâmetro \"nomeMarca\" deve ser fornecido no corpo da requisição. Exemplo: {\"nomeMarca\": \"Marca\"}.");
    }

    res.json(modelsOfACertainBrand(nomeMarca));
})

app.listen(3333, () => console.log(`⚡🚪 Backend started at http://localhost:${port}`));
