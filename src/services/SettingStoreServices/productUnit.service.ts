import httpClient from "../services";
const getAllProductUnitApi = () => {
    return httpClient.get(`/setting/product-unit/index`);
};

export {
    getAllProductUnitApi,
};