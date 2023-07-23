import fs from 'fs';

function captureJSON(filePath){
    try{
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonString);
    }catch(err){
        console.error("Error reading JSON file: ", err);
        return null;
    }
}

export default captureJSON;