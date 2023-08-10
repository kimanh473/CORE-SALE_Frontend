import httpClient from "../services";
const GetAllCustomerProfileApi = () => {
    return httpClient.get(`/customer/profile/index`);
};
export {
    GetAllCustomerProfileApi
};
