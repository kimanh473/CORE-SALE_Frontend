export const typeProduct = [
    {
        type: 'input',
        code: 'text',
        attribute: {
            placeholder: 'text',
            class: 'form-control-input mb-4',
        }
    },
    {
        type: 'input',
        code: 'int',
        attribute: {
            placeholder: 'number',
            class: 'form-control-input',
            style: 'margin-bottom: 10px',
            type: 'number'
        }
    },
    {
        type: 'textarea',
        code: 'varchar',
        attribute: {
            placeholder: 'textarea',
            class: 'form-control-input !pt-4',
        }
    },
    {
        type: 'select',
        code: 'selection',
        attribute: {
            placeholder: 'select',
            class: 'form-control-input',
        }
    },
    {
        type: 'upload',
        code: 'gallery',
        attribute: {
            class: 'form-group-label',
        }
    },
    {
        type: 'switch',
        code: 'switch',
        attribute: {
            checkedValue: 1,
            unCheckedValue: 0,
        }
    }
]