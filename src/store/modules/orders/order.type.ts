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
  create_time: string
}
export interface OrderShopee {
  id: number
  code: string
  order_sn: string
  order_status: string
  buyer_username: string
  buyer_user_id: string
  create_time: string
  created_at: string
  total_amount: string
  note: string
  tax_money: string
}
export interface ProductOrderDetail {
  item_id: number
  item_name: string
  item_sku: string
  model_id: number
  model_name: string
  model_sku: string
  model_quantity_purchased: number
  model_original_price: number
  model_discounted_price: number
  wholesale: boolean
  weight: Float64Array
  add_on_deal: boolean
  main_item: boolean
  add_on_deal_id: number
  promotion_type: string
  promotion_id: number
  order_item_id: number
  promotion_group_id: number
  image_info: {
    image_url: string
  }
  product_location_id: Array<String>
  is_prescription_item: boolean
  is_b2c_owned_item: boolean
}
export interface ItemPackage {
  item_id: number
  model_id: number
  model_quantity: number
  order_item_id: number
  promotion_group_id: number
  product_location_id: string
}
export interface PackageOrderDetail {
  package_number: string
  group_shipment_id: number
  logistics_status: string
  shipping_carrier: string
  item_list: Array<ItemPackage>
  parcel_chargeable_weight_gram: number
}
export interface TrackingOrderDetail {
  update_time: number
  description: string
  logistics_status: string
}
export interface OrderDetail {
  id: string
  Sales_channels: string
  order_status: string
  shop_id: string
  order_sn: string
  total_amount: string
  order_chargeable_weight_gram: string
  payment_method: string
  currency: string
  days_to_ship: string
  estimated_shipping_fee: string
  original_cost_of_goods_sold: string
  seller_return_refund: string
  final_shipping_fee: string
  actual_shipping_fee: string
  shopee_shipping_rebate: string
  voucher_from_seller: string
  commission_fee: string
  service_fee: string
  seller_transaction_fee: string
  order_ams_commission_fee: string
  escrow_amount: string
  total_adjustment_amount: string
  note: string
  noteupdate: string
  paytime: string
  create_time: string
  created_at: string
  buyer_user_id: string
  buyer_username: string
  region: string
  cod: number
  escrow_amount_after_adjustment: string
  discount_from_coin: string
  discount_voucher_from_seller: string
  discount_from_voucher_shopee: string
  buyer_paid_shipping_fee: string
  buyer_total_amount: string
  return_order_sn_list: any
  product_detail: Array<ProductOrderDetail>
  package_list: Array<PackageOrderDetail>
  tracking_info: Array<TrackingOrderDetail>
  recipient_address: Object
}
export interface countStatus {
  total: number
  CANCELLED_INCANCELLED: number
  COMPLETED_SHIPPED: number
  FAILED_DELIVERY: number
  READY_TO_SHIP_PROCESSED: number
  TO_RETURN: number
  TO_CONFIRM_RECEIVE: number
  UNPAID_INVOICE_PENDING: number
  DIFF_STATUS: number
}
