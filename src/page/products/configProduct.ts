export const typeProduct = [
    {
        type: 'input',
        code: 'text',
        attribute: {
            placeholder: 'Nhập text',
            class: 'form-control-input mb-4',
        }
    },
    {
        type: 'input',
        code: 'int',
        attribute: {
            placeholder: 'Nhập số',
            class: 'form-control-input mb-4',
            type: 'number'
        }
    },
    {
        type: 'textarea',
        code: 'textarea',
        attribute: {
            placeholder: 'Nhập text',
            class: 'form-control-input !pt-4',
        }
    },
    {
        type: 'select',
        code: 'selection',
        attribute: {
            placeholder: 'Chọn',
            class: 'form-control-input',
        }
    },
    {
        type: 'upload',
        code: 'upload',
        attribute: {
            class: 'form-group-label',
        }
    },
    // {
    //     type: 'date-picker',
    //     code: 'date-picker',
    //     attribute: {
    //         class: 'form-group-label',
    //         placeholder: 'Chọn ngày',
    //         format: 'YYYY/MM/DD'
    //     }
    // },
    {
        type: 'switch',
        code: 'switch',
        attribute: {
            checkedValue: '1',
            unCheckedValue: '0',

        }
    }
]