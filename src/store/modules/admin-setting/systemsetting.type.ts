export interface DataSystemSetting {
  mail_to_customer_when_deleted_order: number
  mail_to_customer_when_created_order: number
  mail_to_customer_when_start_shipping: number
  mail_to_customer_when_change_order: number
  mail_to_customer_when_paid: number
  mail_to_customer_when_hasnt_paid: number
  after_hour: number
  shipping_method: Array<string>
  pay_cash: number
  pay_credit_card: number
  e_wallet: number
  TIME_NEW_PRODUCT: number
  CUSTOMER_COMMENT: number
  CHANGE_TOTAL_WHEN_DELETE_ORDER: number
  TOTAL_PRODUCT_MIN: number
  WARNING_WHEN_TOTAL_IS: number
  TOTAL_MAX_PRODUCT_IN_CART: number
  TOTAL_MIN_PRODUCT_IN_CART: number
  AUTO_ADD_GROUP_DEFAULT_FOR_CUSTOMER: number
  SENT_MAIL_VERIFY: number
  CUSTOMER_CONFIRM_EMAIL: number
  TIME_CUSTOMER_CONFIRM_EMAIL: number
  WELCOME_NEW_CUSTOMER: number
  BUY_NO_USE_ACCOUNT: number
  MULTIPLE_DISCOUNT: number
  MULTIPLE_DISCOUNT_COUNT: number
  CHANGE_VALUE_AFTER_EDIT_DELETE_DISCOUNT: number
  MULTIPLE_PROMOTION: number
  MULTIPLE_PROMOTION_COUNT: number
  MULTIPLE_PROMOTION_DISCOUNT: number
}
export interface DataAdminSetting {
  id: number
  title: string
  is_admin: string
  created_at: string
  updated_at: string
  deleted_at: string
  json_string_roles: string[]
  json_web_list: string[]
  json_inventory_list: string[]
}
export interface RoleList {
  storeSetting: string
  product: string
  createProduct: string
  updateProduct: string
  deleteProduct: string
  printProduct: string
  importProduct: string
  exportProduct: string
}
export interface DataPosition {
  id: number
  title: string
  header_code: string
  desc: string
  created_by_id: string
  updated_by_id: string
  status: string
  created_at: string
  updated_at: string
  deleted_at: string
}
export interface DataDepartment {
  id: number
  title: string
  code: string
  status: string
  parent_id: string
  business_id: string
  deep: string
  sub_ids: string
  is_company: string
  company_id: string
  ord: string
  alias: string
  desc: string
  type: string
  tax: string
  address: string
  headoffice: string
  created_by_id: string
  updated_by_id: string
  date_created: string
  date_updated: string
  thumbs: string
  num_file: string
  created_at: string
  updated_at: string
  deleted_at: string
}
