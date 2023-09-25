import httpClient from "../services";
//Danh sách bảng giá
const getAdjustPriceApi = () => {
    return httpClient.get(`/system-manage/product-price-setting/index`);
};
const getdetailAdjustPriceApi = (id: number) => {
    return httpClient.get(`/system-manage/product-price-setting/show/${id}`);
};
const crateAdjustPriceApi = (data: object) => {
    return httpClient.post(`/system-manage/product-price-setting/create`, data);
};
export {
    getAdjustPriceApi,
    getdetailAdjustPriceApi,
    crateAdjustPriceApi
};