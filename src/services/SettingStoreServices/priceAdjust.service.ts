import httpClient from "../services";
//Danh sách bảng giá
const getAdjustPriceApi = () => {
    return httpClient.get(`/system-manage/product-price-setting/index`);
};
export {
    getAdjustPriceApi,
};