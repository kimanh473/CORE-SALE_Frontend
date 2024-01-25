export interface dataDetailOld {
  id: number
  title: string
  status: string
}
export interface dataDetailNew {
  title: string
  status: string
}
export interface DataAttribute {
  id: number
  entity_type_id: string
  attribute_code: string
  attribute_model: string
  backend_model: string
  backend_type: string
  backend_table: string
  frontend_model: string
  frontend_input: string
  frontend_label: string
  frontend_class: string
  source_model: string
  is_required: string
  is_user_defined: string
  default_value: string
  is_unique: string
  note: string
  created_at: string
  updated_at: string
  deleted_at: string
  is_specification: string
  options_new: Array<dataDetailNew>
  options_old: Array<dataDetailOld>
  option_detail: Array<dataDetailOld>
  user_created: object
  user_updated: object
  attribute_detail: Array<DataAttribute>
}
export interface DataGroupAttribute {
  attribute_detail: Array<DataAttribute>
  code: string
  created_at: string
  created_by_id: string
  deleted_at: string
  id: number
  is_specification: string
  json_attribute_detail: Array<string>
  status: string
  title: string
  updated_at: string
  updated_by_id: string
}
export interface SetDataAttribute {
  id: number
  code: string
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

export interface DataProduct {
  id: string
  attribute_set_id: string
  type_id: string
  sku: number
  web_site_code: Array<string>
  inventory_code: Array<string>
  details: Array<Object>
}
export interface DataCategory {
  id: number
  title: string
  code: string
  parent_id: string
  deep: string
  sub_ids: string
  images: string
  desc: string
  created_by_id: string
  updated_by_id: string
  created_at: string
  updated_at: string
  deleted_at: string
}
export interface child {
  id: number
  title: string
  parent_id: string
}
export interface TreeCategory {
  id: number
  title: string
  parent_id: string
  children: Array<child>
}
export interface DataUnit {
  id: string
  code: string
  title: string
  status: number
  created_at: Array<string>
  updated_at: Array<string>
  product_unit_rates: Array<Object>
}
export interface DataSpecification {
  id: number
  code: string
  title: string
  unit: string
  desc: string
  created_by_id: string
  updated_by_id: string
  created_at: string
  updated_at: string
  deleted_at: string
}
export interface DataTax {
  id: number
  title: string
  code: string
  tax_rate: string
  desc: string
  status: string
  created_by_id: string
  updated_by_id: string
  created_at: string
  updated_at: string
  deleted_at: string
  user_created: object
}
export interface DataCurrency {
  id: number
  decimal_number?: number
  code: string
  title: string
  status: string
  symbol?: string
  symbol2?: string
  created_by_id: string
  created_by: object
  updated_by_id: string
  created_at: string
  updated_at: string
  deleted_at: string
  rate: string
  is_default: string
}
export interface DataCurrencyInternational {
  title: string
  code: string
}
export interface Period {
  title: string
  date_start: string
  date_end: string
  listed_price: string
  wholesale_price: string
  retail_price: string
}
export interface ProductPriceDetail {
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
export interface DataAdjustPrice {
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
