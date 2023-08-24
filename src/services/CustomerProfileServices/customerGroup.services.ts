import httpClient from "../services";
const getAllGroupCustomerApi = () => {
    return httpClient.get(`/system-manage/customer-type/index-paginate`);
};

const createGroupCustomerApi = () => {
    return httpClient.post(`/system-manage/customer-type/create`)
}

export {
    getAllGroupCustomerApi,
    createGroupCustomerApi
};
