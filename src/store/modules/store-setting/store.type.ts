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
    option_detail: Array<string>
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
    code: string,
    title: string,
    status: string,
    created_by_id: string,
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
