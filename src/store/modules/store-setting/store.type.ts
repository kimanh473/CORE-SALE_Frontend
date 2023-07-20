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
    title: string,
    key: string
}
interface TreeCategory {
    title: string,
    key: string,
    children: Array<child>,
}

