interface DataUser {
    code: string,
    username: string,
    fullname: string,
    group_id: string,
    password: string,
    password_confirmation: string,
    email_company: string,
    email_personal: string,
    phone: string,
    status: string,
    web_list: Array<string>,
    inventory_list: Array<string>,
    department_title: any,
    position_title: any
}