import httpClient from "../services";
//Danh sách bảng giá
const getAdjustPriceApi = () => {
    return httpClient.get(`/system-manage/product-price-setting/index`);
};
const getdetailAdjustPriceApi = (id: number) => {
    return httpClient.get(`/system-manage/product-price-setting/show/${id}`);
};
const createAdjustPriceApi = (data: object) => {
    return httpClient.post(`/system-manage/product-price-setting/create`, data);
};
const updateAdjustPriceApi = (id: number, data: object) => {
    return httpClient.post(`/system-manage/product-price-setting/update/${id}`, data);
};
const deleteAdjustPriceApi = (id: number) => {
    return httpClient.post(`/system-manage/product-price-setting/delete/${id}`);
};
export {
    getAdjustPriceApi,
    getdetailAdjustPriceApi,
    createAdjustPriceApi,
    updateAdjustPriceApi,
    deleteAdjustPriceApi
};