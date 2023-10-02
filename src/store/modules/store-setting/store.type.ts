interface DataAttribute {
    id: number,
    entity_type_id: string,
    attribute_code: string,
    attribute_model: string,
    backend_model: string,
    backend_type: string,
    backend_table: string,
    frontend_model: string,
    frontend_input: string,
    frontend_label: string,
    frontend_class: string,
    source_model: string,
    is_required: string,
    is_user_defined: string,
    default_value: string,
    is_unique: string,
    note: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    is_specification: string,
    options_new: Array<dataDetailNew>
    options_old: Array<dataDetailOld>
    option_detail: Array<dataDetailOld>
    user_created: object,
    user_updated: object
    attribute_detail: Array<DataAttribute>
}
interface SetDataAttribute {
    id: number
    code: string,
    title: string
    created_by_id: string
    updated_by_id: string
    created_at: string
    updated_at: string
    deleted_at: string
    status: string
    json_group_attribute_code: Array<string>
    json_group_attribute_detail: Array<DataAttribute>
}
interface dataDetailOld {
    id: number,
    title: string,
    status: string,
}
interface dataDetailNew {
    title: string,
    status: string,
}
interface DataProduct {
    id: string
    attribute_set_id: string
    type_id: string
    sku: number
    web_site_code: Array<String>
    inventory_code: Array<String>
    details: Array<Object>
}
interface DataCategory {
    id: number,
    title: string,
    code: string,
    parent_id: string,
    deep: string,
    sub_ids: string,
    images: string,
    desc: string,
    created_by_id: string,
    updated_by_id: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
}
interface child {
    id: number,
    title: string,
    parent_id: string,
}
interface TreeCategory {
    id: number,
    title: string,
    parent_id: string,
    children: Array<child>,
}
interface DataUnit {
    id: string
    code: string
    title: string
    status: number
    created_at: Array<String>
    updated_at: Array<String>
    product_unit_rates: Array<Object>
}
interface DataSpecification {
    id: number,
    code: string,
    title: string,
    unit: string,
    desc: string,
    created_by_id: string,
    updated_by_id: string,
    created_at: string,
    updated_at: string,
    deleted_at: string
}
interface DataTax {
    id: number,
    title: string,
    code: string,
    tax_rate: string,
    desc: string,
    status: string,
    created_by_id: string,
    updated_by_id: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    user_created: object
}
interface DataCurrency {
    id: number,
    decimal_number?: number,
    code: string,
    title: string,
    status: string,
    symbol?: string,
    symbol2?: string,
    created_by_id: string,
    created_by: object,
    updated_by_id: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    rate: string,
    is_default: string
}
interface DataCurrencyInternational {
    title: string,
    code: string
}
interface DataAdjustPrice {
    id: number
    title: string
    created_by_id: string
    updated_by_id: string
    created_at: string
    updated_at: string
    deleted_at: string
    user_created: object
    user_updated: object
    json_website_list: Array<string>
    json_nganh_hang_list: Array<string>
    json_period: Array<Period>
    json_product_price_detail: Array<ProductPriceDetail>
    json_product_code_list: Array<string>

}
interface Period {
    title: string
    date_start: string
    date_end: string
    listed_price: string
    wholesale_price: string
    retail_price: string
}
interface ProductPriceDetail {
    sku: string
    code: string
    unit: string
    has_custom: string
    date_start: string
    date_end: string
    listed_price: string
    wholesale_price: string
    retail_price: string
}
