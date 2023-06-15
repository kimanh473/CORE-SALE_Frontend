import httpClient from "../services";
const getAllWebCatalogsApi = () => {
    return httpClient.get(`/setting/catalog-website/list-no-paginate`);
};
export {
    getAllWebCatalogsApi,
};