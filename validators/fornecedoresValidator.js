const fornecedoresValidator = {
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
    email: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: 'Insira um endereço de e-mail válido',
        },
    },
    telefone: {
        required: {
            value: true,
            message: 'O campo é obrigatório',
        },
        maxLength: {
            value: 15,
            message: 'A quantidade máxima de caracteres é 11',
        },
        minLength: {
            value: 14,
            message: 'A quantidade mínima de caracteres é 10',
        },
        pattern: {
            value: /^[\d() -]+$/,
            message: 'Insira apenas dígitos numéricos, parênteses, espaços e hífens',
        },
    },
}

export default fornecedoresValidator