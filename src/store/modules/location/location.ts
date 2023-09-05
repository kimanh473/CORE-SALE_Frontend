import {defineStore} from "pinia";
import {
    GetAllCityApi,
    GetAllDistrictsApi,
    GetAllWardsApi,
    GetAllWardsApi_2,
    GetAllDistrictsApi_2
} from '../../../services/LocationServices/location.service'

export const useLocation = defineStore("Location", {
    state: () => ({
        listAllCity: null,
        listAllDistrict: [],
        listAllDistrict_2: [],
        listAllWard: null,
        listAllWard_2: [],
    }),
    getters: {},
    actions: {
        getListAllCity(payload: any) {
            this.listAllCity = payload?.data
        },
        getListAllDistrict(payload: any) {
            this.listAllDistrict = payload?.data
        },
        getListAllDistrict_2(payload: any) {
            this.listAllDistrict_2 = payload?.data
        },
        getListAllWard(payload: any) {
            this.listAllWard = payload?.data
        },
        getListAllWard_2(payload: any) {
            this.listAllWard_2 = payload?.data
        },
        getListAllCityAction() {
            GetAllCityApi()
                .then((payload: any) => {
                    this.getListAllCity(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getListAllDistrictAction(id: number) {
            await GetAllDistrictsApi(id)
                .then((payload: any) => {
                    this.getListAllDistrict(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getListAllDistrictAction_2() {
            await GetAllDistrictsApi_2()
                .then((payload: any) => {
                    this.getListAllDistrict_2(payload.data)
                    //console.log(JSON.stringify(payload.data.data))
                    localStorage.setItem('list_district', JSON.stringify(payload.data.data))
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        getListAllWardAction(id: number) {
            GetAllWardsApi(id)
                .then((payload: any) => {
                    this.getListAllWard(payload.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        async getListAllWardAction_2() {
            await GetAllWardsApi_2()
                .then((payload: any) => {
                    this.getListAllWard_2(payload.data)
                    localStorage.setItem('list_ward', JSON.stringify(payload.data.data))
                })
                .catch((err) => {
                    console.log(err)
                });
        },
    },
})