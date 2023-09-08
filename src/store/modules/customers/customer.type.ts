interface DataCustomerProfile {
    id: number
    code: string
    name: string
    email: string
    birth_day: string
    gender: string
    phone: string
    detail_delivery_address: Array<DetailDeliveryAddress>
    detail_pay_address: Array<DetailPayAddress>
    delivery_address: string
    pay_address: string
    list_address: string
    list_pay_address: string
    customer_group: string
}
interface DetailDeliveryAddress {
    title: string,
    address_country_id: string,
    address_state_id: string,
    address_district_id: string,
    address_ward_id: string,
    address_detail: string,
    is_default: string
}
interface DetailPayAddress {
    title: string,
    address_country_id: string,
    address_state_id: string,
    address_district_id: string,
    address_ward_id: string,
    address_detail: string,
    pay_address_detail: string
    is_default_pay: string
}
interface DataCustomerAccount {
    id: number,
    code: string,
    status: string,
    username: string,
    fullname: string,
    email_company: string,
    email_personal: string,
    phone: string,
    gender: string,
    web_code: string,
}
interface DataGroupCustomer {
    id: number,
    code: string,
    title: string,
    status: number,
    is_default: number,
    desc: string,
    rule: number,
    json_rule_detail: Array<JsonRuleDetail>
}
interface JsonRuleDetail {
    time_account_min: number,
    total_order: number,
    total_order_destroy: number,
    total_value_order: string,
    frequency_order: number
}