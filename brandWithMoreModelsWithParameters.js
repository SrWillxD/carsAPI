import captureJSON from "./captureJSON.js";

function brandWithMoreModelsWhitParameters(amount) {
    const filePath = "./car-list.json";
    const jsonData = captureJSON(filePath);

    let modelCount = [];

    jsonData.forEach(car => {
        modelCount.push([car.brand, car.models.length]);
    });

    modelCount.sort((a, b) => b[1] - a[1]);

    const brandsTiedWithMoreModels = [];
    
    for (let i = 0; i < amount; i++) {
        brandsTiedWithMoreModels.push(modelCount[i]);
    }

    return brandsTiedWithMoreModels;
}
console.log(brandWithMoreModelsWhitParameters(10));