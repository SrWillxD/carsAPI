import captureJSON from "./captureJSON.js";

async function brandWithMoreModelsWhitParameters(amount) {
    const filePath = "./car-list.json";
    const jsonData = await captureJSON(filePath);

    let modelCount = [];

    jsonData.forEach(car => {
        modelCount.push([car.brand, car.models.length]);
    });

    modelCount.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }else{
            return a[0].localeCompare(b[0]);
        }
    });

    const brandsTiedWithMoreModels = [];

    for (let i = 0; i < amount; i++) {
        brandsTiedWithMoreModels.push(modelCount[i]);
    }

    return brandsTiedWithMoreModels;
}

export default brandWithMoreModelsWhitParameters;
