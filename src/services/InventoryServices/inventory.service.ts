import httpClient from "../services";
const getAllInventoryApi = () => {
    return httpClient.get(`/setting/product-inventory/index`);
};
export {
    getAllInventoryApi,
};