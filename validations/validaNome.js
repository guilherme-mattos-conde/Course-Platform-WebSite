export default function validarNome(nome) {
    const NOME_REGEX = /^(?:[A-Z, a-z]*\s+){1,}[A-Z, a-z]*$/;
    return NOME_REGEX.test(nome.trimEnd());
}