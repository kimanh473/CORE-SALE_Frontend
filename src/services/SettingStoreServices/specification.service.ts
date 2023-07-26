import httpClient from "../services";
const getListSpecificationApi = () => {
    return httpClient.get(`/system-manage/product-specification/index`);
};

export {
    getListSpecificationApi,
};