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
