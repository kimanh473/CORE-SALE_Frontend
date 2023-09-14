import httpClient from "../services";
//Danh sách bảng giá
const getAdjustPriceApi = () => {
    return httpClient.get(`/system-manage/product-price-setting/index`);
};
const getdetailAdjustPriceApi = (id: number) => {
    return httpClient.get(`/system-manage/product-price-setting/show/${id}`);
};
export {
    getAdjustPriceApi,
    getdetailAdjustPriceApi
};