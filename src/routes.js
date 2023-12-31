import express from 'express';
const routes = express.Router();


import brandWithMoreModels from './middlewares/brandWithMoreModels.js';
import brandWithLessModels from './middlewares/brandWithLessModels.js';
import brandWithMoreModelsWithParameters from './middlewares/brandWithMoreModelsWithParameters.js';
import brandWithLessModelsWithParameters from './middlewares/brandWithLessModelsWithParameters.js';
import modelsOfACertainBrand from './middlewares/modelsOfACertainBrand.js';

routes.get('/marcas/maisModelos', async (req, res)=>{
    try {
        const result = await brandWithMoreModels();
        res.json(result);
    } catch (err) {
        console.error('Error in /marcas/maisModelos route:', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});

routes.get('/marcas/menosModelos', async (req, res)=>{
    try {
        const result = await brandWithLessModels();
        res.json(result);
    } catch (err) {
        console.error('Error in /marcas/menosModelos', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});

routes.get('/marcas/listaMaisModelos/:amount', async (req, res)=>{
    try {
        const amount = parseInt(req.params.amount);
    
        if (isNaN(amount) || !Number.isInteger(amount)) {
            return res.status(400).send('O parâmetro deve ser um número inteiro válido.');
        }
        const result = await brandWithMoreModelsWithParameters(amount)
        res.json(result);
        
    } catch (err) {
        console.error('Error in /marcas/listaMaisModelos/:amount', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});

routes.get('/marcas/listaMenosModelos/:amount', async (req, res)=>{
    try {
        const amount = parseInt(req.params.amount);
    
        if (isNaN(amount) || !Number.isInteger(amount)) {
            return res.status(400).json('O parâmetro deve ser um número inteiro válido.');
        }
    
        const result = await brandWithLessModelsWithParameters(amount);
        res.json(result);
        
    } catch (error) {
        console.error('Error in /marcas/listaMenosModelos/:amount', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});

routes.post('/marcas/listaModelos', async (req, res)=>{
    try {
        const { nomeMarca } = req.body;
    
        if(nomeMarca === undefined) {
            return res.status(400).send("O parâmetro \"nomeMarca\" deve ser fornecido no corpo da requisição. Exemplo: {\"nomeMarca\": \"Marca\"}.");
        }
    
        const result = await modelsOfACertainBrand(nomeMarca);
        res.json(result);
    } catch (err) {
        console.error('Error in /marcas/listaModelos', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});


export default routes;
