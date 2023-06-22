import { defineStore } from "pinia";
import { GetAllCityApi, GetAllDistrictsApi, GetAllWardsApi } from '../../../services/LocationServices/location.service'
export const useLocation = defineStore("Location", {
    state: () => ({
        listAllCity: null,
        listAllDistrict: null,
        listAllWard: null
    }),
    getters: {},
    actions: {
        getListAllCity(payload: any) {
            this.listAllCity = payload?.data
        },
        getListAllDistrict(payload: any) {
            this.listAllDistrict = payload?.data
        },
        getListAllWard(payload: any) {
            this.listAllWard = payload?.data
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
        getListAllDistrictAction(id: number) {
            GetAllDistrictsApi(id)
                .then((payload: any) => {
                    this.getListAllDistrict(payload.data)
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
    },
})