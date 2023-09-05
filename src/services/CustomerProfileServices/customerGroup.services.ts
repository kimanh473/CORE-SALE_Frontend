import httpClient from "../services";
const getAllGroupCustomerApi = () => {
    return httpClient.get(`/system-manage/customer-type/index-paginate`);
};

const getAllGroupCustomerNoPaginateApi = () => {
    return httpClient.get(`/system-manage/customer-type/index`);
};

const createGroupCustomerApi = (data:object) => {
    return httpClient.post(`/system-manage/customer-type/create`,data)
}

const getDetailGroupCustomerApi = (id: number) => {
    return httpClient.get(`/system-manage/customer-type/show/${id}`)
}

const updateGroupCustomerApi = (id:number, data:object) => {
    return httpClient.post(`/system-manage/customer-type/update/${id}`,data)
}

const deleteGroupCustomerApi = (id:number) => {
    return httpClient.post(`/system-manage/customer-type/delete/${id}`)
}



export {
    getAllGroupCustomerApi,
    createGroupCustomerApi,
    getDetailGroupCustomerApi,
    updateGroupCustomerApi,
    deleteGroupCustomerApi,
    getAllGroupCustomerNoPaginateApi
};
