import captureJSON from "./captureJSON.js";

function modelsOfACertainBrand(brand){
    const filePath = "./car-list.json";
    const jsonData = captureJSON(filePath);

    const modelList = [];

    jsonData.forEach(car => {
        if(car.brand.toLowerCase() === brand.toLowerCase()){
            modelList.push(car.models);
        }
    });

    return modelList;
}

export default modelsOfACertainBrand;