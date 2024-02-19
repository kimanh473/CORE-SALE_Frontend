export interface RecepientAddress {
  id: number
  code: string
}


export interface Order {
  id: number
  code: string
  customer_account_code: string
  recepient_address: Array<RecepientAddress>
  transport_detail: string
  web_code: string
  address_country_id: string
  address_state_id: string
  address_district_id: string
  address_ward_id: string
  address_detail: string
  user_created: string
  auth_created: string
  customer_created: string
  json_product_detail: string
  created_at: string
  updated_at: string
}
