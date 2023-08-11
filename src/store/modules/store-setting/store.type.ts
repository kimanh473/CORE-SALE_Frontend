interface DataAttribute {
    id: number
    title: string
    code: string
    status: number
    json_attribute_detail: Array<String>
    created_at: string
    attribute_code: string
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
