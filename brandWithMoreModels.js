import captureJSON from "./captureJSON.js";

function brandWithMoreModels(){
    const filePath = "./car-list.json";
    const jsonData = captureJSON(filePath);

    let modelCount = [];

    jsonData.forEach(car => {
        modelCount.push([car.brand, car.models.length]);
    });

    modelCount.sort((a, b) => b[1] - a[1]);

    const highestQuantityOfModels = modelCount[0][1];
    const brandsTiedWithMoreModels = [];

    modelCount.forEach(item => {
        if (item[1] === highestQuantityOfModels) {
            brandsTiedWithMoreModels.push(item[0]);
        }
    });

    return brandsTiedWithMoreModels;
}