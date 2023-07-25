import captureJSON from "./captureJSON.js";

function brandWithLessModels(){
    const filePath = "./car-list.json";
    const jsonData = captureJSON(filePath);

    let modelCount = [];

    jsonData.forEach(car => {
        modelCount.push([car.brand, car.models.length]);
    });

    modelCount.sort((a, b) => a[1] - b[1]);

    const fewerQuantityOfModels = modelCount[0][1];
    const brandsTiedWithLessModels = [];

    modelCount.forEach(item => {
        if (item[1] === fewerQuantityOfModels) {
            brandsTiedWithLessModels.push(item[0]);
        }
    });

    return brandsTiedWithLessModels;
}

export default brandWithLessModels;