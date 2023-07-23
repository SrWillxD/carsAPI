import fs from 'fs';

function captureJSON(filePath){
    try{
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonString);
    }catch(err){
        console.error("Erro ao ler o arquivo JSON: ", err);
        return null;
    }
}

export default captureJSON;