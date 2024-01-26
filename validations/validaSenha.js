export default function validarSenha(senha) {
    const maiuscula = document.getElementById('check-maiuscula')
    const minuscula = document.getElementById('check-minuscula')
    const numero = document.getElementById('check-numero')
    const especial = document.getElementById('check-especial')
    const minimo = document.getElementById('check-minimo')
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    const regexEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const tamanhoMinimo = senha.length > 7;
    const checkbox = "./assets/checkbox.png"
    const checkboxFilled = "./assets/checkbox-filled.png"

    if(regexMaiuscula.test(senha)) {
        maiuscula.src = checkboxFilled
    }
    else {
        maiuscula.src = checkbox
    }

    if(regexMinuscula.test(senha)) {
        minuscula.src = checkboxFilled
    }
    else {
        minuscula.src = checkbox
    }

    if(regexNumero.test(senha)) {
        numero.src = checkboxFilled
    }
    else {
        numero.src = checkbox
    }

    if(regexEspecial.test(senha)) {
        especial.src = checkboxFilled
    }
    else {
        especial.src = checkbox
    }

    if(tamanhoMinimo) {
        minimo.src = checkboxFilled
    }
    else {
        minimo.src = checkbox
    }

    if(regexMaiuscula.test(senha) && regexMinuscula.test(senha) && regexNumero.test(senha) && regexEspecial.test(senha) && tamanhoMinimo) {
        return true
    }
}
