interface DataSystemSetting {
    mail_to_customer_when_deleted_order: Number
    mail_to_customer_when_created_order: Number
    mail_to_customer_when_start_shipping: Number
    mail_to_customer_when_change_order: Number
    mail_to_customer_when_paid: Number
    mail_to_customer_when_hasnt_paid: Number
    after_hour: Number
    shipping_method: Array<String>
    pay_cash: Number
    pay_credit_card: Number
    e_wallet: Number
    TIME_NEW_PRODUCT: Number
    CUSTOMER_COMMENT: Number
    CHANGE_TOTAL_WHEN_DELETE_ORDER: Number
    TOTAL_PRODUCT_MIN: Number
    WARNING_WHEN_TOTAL_IS: Number,
    TOTAL_MAX_PRODUCT_IN_CART: Number
    TOTAL_MIN_PRODUCT_IN_CART: Number
    AUTO_ADD_GROUP_DEFAULT_FOR_CUSTOMER: Number
    SENT_MAIL_VERIFY: Number
    CUSTOMER_CONFIRM_EMAIL: Number
    TIME_CUSTOMER_CONFIRM_EMAIL: Number
    WELCOME_NEW_CUSTOMER: Number
    BUY_NO_USE_ACCOUNT: Number
    MULTIPLE_DISCOUNT: Number
    MULTIPLE_DISCOUNT_COUNT: Number
    CHANGE_VALUE_AFTER_EDIT_DELETE_DISCOUNT: Number
    MULTIPLE_PROMOTION: Number
    MULTIPLE_PROMOTION_COUNT: Number
    MULTIPLE_PROMOTION_DISCOUNT: Number
}
interface DataAdminSetting {
    id: number,
    title: string,
    is_admin: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    json_string_roles: string[],
    json_web_list: string[],
    json_inventory_list: string[],
}
interface RoleList {
    storeSetting: string,
    product: string,
    createProduct: string,
    updateProduct: string,
    deleteProduct: string,
    printProduct: string,
    importProduct: string,
    exportProduct: string,
}