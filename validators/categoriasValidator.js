const categoriasValidator = {
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
    descricao: {
      required: {
        value: true,
        message: 'O campo é obrigatório',
      },
      minLength: {
        value: 10,
        message: 'A quantidade mínima de caracteres é 10',
      },
    },
  };
  
  export default categoriasValidator;