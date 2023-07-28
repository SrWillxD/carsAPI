import express from 'express';
const routes = express.Router();


import brandWithMoreModels from './middlewares/brandWithMoreModels.js';
import brandWhitLessModels from './middlewares/brandWithLessModels.js';
import brandWithMoreModelsWithParameters from './middlewares/brandWithMoreModelsWithParameters.js';
import brandWithLessModelsWithParameters from './middlewares/brandWithLessModelsWithParameters.js';
import modelsOfACertainBrand from './middlewares/modelsOfACertainBrand.js';

routes.get('/marcas/maisModelos', (req, res)=>{
    res.json(brandWithMoreModels());
});

routes.get('/marcas/menosModelos', (req, res)=>{
    res.json(brandWhitLessModels());
});

routes.get('/marcas/listaMaisModelos/:amount', (req, res)=>{
    const amount = parseInt(req.params.amount);

    if (isNaN(amount) || !Number.isInteger(amount)) {
        return res.status(400).send('O parâmetro deve ser um número inteiro válido.');
    }

    res.json(brandWithMoreModelsWithParameters(amount));
});

routes.get('/marcas/listaMenosModelos/:amount', (req, res)=>{
    const amount = parseInt(req.params.amount);

    if (isNaN(amount) || !Number.isInteger(amount)) {
        return res.status(400).json('O parâmetro deve ser um número inteiro válido.');
    }

    res.json(brandWithLessModelsWithParameters(amount));
});

routes.post('/marcas/listaModelos', (req, res)=>{
    const { nomeMarca } = req.body;

    if(nomeMarca === undefined) {
        return res.status(400).send("O parâmetro \"nomeMarca\" deve ser fornecido no corpo da requisição. Exemplo: {\"nomeMarca\": \"Marca\"}.");
    }

    res.json(modelsOfACertainBrand(nomeMarca));
});


export default routes;
