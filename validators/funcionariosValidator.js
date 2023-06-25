const funcionariosValidator = {
    nome: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^[A-Za-z\u00C0-\u017F\s]+$/,
            message: 'Insira apenas letras, espaços e acentuações',
        },
        minLength: {
            value: 3,
            message: 'A quantidade mínima de caracteres é 3',
        },
    },
    cargo: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^[A-Za-z\u00C0-\u017F\s]+$/,
            message: 'Insira apenas letras, espaços e acentuações',
        },
        minLength: {
            value: 3,
            message: 'A quantidade mínima de caracteres é 3',
        },
    },
    salario: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^[0-9]+([.][0-9]{1,2})?$/,
            message: 'Insira um valor numérico válido',
        },
    },
    dtcontratacao: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'Insira uma data válida no formato dd/mm/aaaa',
        },
    },
}

export default funcionariosValidator