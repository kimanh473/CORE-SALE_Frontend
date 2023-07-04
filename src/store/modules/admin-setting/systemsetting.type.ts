interface DataSystemSetting {
    mail_to_customer_when_deleted_order: Number
    mail_to_customer_when_created_order: Number
    mail_to_customer_when_start_shipping: Number
    mail_to_customer_when_change_order: Number
    mail_to_customer_when_paid: Number
    mail_to_customer_when_hasnt_paid: Number
    after_hour: Number,
    shipping_method: Array<String>,
}