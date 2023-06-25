const pedidosValidator = {
    quantidade: {
        required: {
            value: true,
            message: 'Campo obrigatório. Insira apenas dígitos numéricos',
        },
        maxLength: {
            value: 3,
            message: 'A quantidade máxima de caracteres é 3',
        },
        pattern: {
            value: /^[0-9]+$/,
            message: 'Insira apenas dígitos numéricos',
        },
    },
    dtpedido: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'Insira uma data válida no formato dd/mm/aaaa',
        },
    },
    total: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^[0-9]+([.][0-9]{1,2})?$/,
            message: 'Insira um valor numérico válido',
        },
    },
}

export default pedidosValidator