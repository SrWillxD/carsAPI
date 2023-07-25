import captureJSON from "./captureJSON.js";

function brandWithLessModelsWhitParameters(amount) {
    const filePath = "./car-list.json";
    const jsonData = captureJSON(filePath);

    let modelCount = [];

    jsonData.forEach(car => {
        modelCount.push([car.brand, car.models.length]);
    });

    modelCount.sort((a, b) => {
        if (b[1] !== a[1]) {
            return a[1] - b[1];
        }else{
            return a[0].localeCompare(b[0]);
        }
    
    });

    const brandsTiedWithLessModels = [];
    
    for (let i = 0; i < amount; i++) {
        brandsTiedWithLessModels.push(modelCount[i]);
    }

    return brandsTiedWithLessModels;
}

export default brandWithLessModelsWhitParameters;