const produtosValidator = {
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
    preco: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^[0-9]+([.][0-9]{1,2})?$/,
            message: 'Insira um valor numérico válido',
        },
    },
    categoria: {
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
    estoque: {
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
}

export default produtosValidator