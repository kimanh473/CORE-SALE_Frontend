interface DataInventory {
    id: number
    title: string
    code: string
    status: boolean
    json_type_code: object
    address: string
    fullname: string
    created_at: string
}
interface DetailInvent {
    id: string,
    title: string,
    code: string,
    json_type_code: object,
    latitude: string,
    longitude: string,
    contact_name: string,
    contact_email: string,
    contact_phone: string,
    address: string,
    address_country_id: string,
    address_district_id: string,
    address_ward_id: string,
    address_state_id: string,
    address_detail: string,
    desc: string,
}
interface DetailErorr {
    id: string,
    title: string,
    code: string,
    type_code: any,
    latitude: string,
    longitude: string,
    contact_name: string,
    contact_email: string,
    contact_phone: string,
    address: string,
    address_country_id: string,
    address_district_id: string,
    address_ward_id: string,
    address_state_id: string,
    address_detail: string,
    desc: string,
}
interface DetailGroupInvent {
    id: number,
    code: string,
    title: string,
    created_by_id: string,
    updated_by_id: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    desc: string
}