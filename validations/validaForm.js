import validarNome from "./validaNome.js"
import validarEmail from "./validaEmail.js"
import validarCPF from "./validaCPF.js"
import validarSenha from "./validaSenha.js"
import validarNasc from "./validaNasc.js"
import formatarCPF from "../utils/formataCPF.js"
import formatarCEP from "../utils/formataCEP.js"
import buscaCEP from "../api/buscaCEP.js"

const botaoEnviar = document.getElementById('botao-enviar')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const cpf = document.getElementById('cpf')
const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')
const cep = document.getElementById('cep')
const senha = document.getElementById('senha')
const requisitos = document.getElementById('requisitos')
const inputConfirmaSenha = document.getElementById('confirmar-senha')
const divConfirmaSenha = document.getElementById('confirmar-senha-div')
const mensagemErro = document.getElementById('mensagem-erro')
const inputs = document.querySelectorAll('.input')
const dados = [nome, email, cpf, inputConfirmaSenha]
const data = [dia, mes, ano]

cpf.addEventListener('keyup', () => cpf.value = formatarCPF(cpf.value))
cep.addEventListener('keyup', () => cep.value = formatarCEP(cep.value))

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    if(verificaVazio() && validarNome(nome.value) && validarEmail(email.value) && validarCPF(cpf.value) && validarSenha(senha.value) && inputConfirmaSenha.value === senha.value && validarNasc(parseInt(dia.value), parseInt(mes.value), parseInt(ano.value)) && cep.classList.value === 'input' && cep.value.length === 10) {
        enviaForm()
    }
    else {
        mensagemErro.textContent = 'Preencha o formulário corretamente!'
        setTimeout(() => {
            mensagemErro.textContent = ''
        }, 2000)
    }
})

function enviaForm() {
    console.log('Formulário Enviado!')

    inputs.forEach((input) => {
        let label = input.nextElementSibling
        console.log(label.textContent + ': ' + input.value)
    })

    limpaForm()
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    setTimeout(() => {
        alert('Formulário Enviado!')
    }, 1000)
}

function limpaForm() {
    inputs.forEach((input) => {
        let label = input.nextElementSibling
        input.value = ''
        label.classList = 'label'
    })
}
function verificaVazio() {
    var controle = true

    inputs.forEach((input) => {
        if(input.type !== 'submit' && input.id !== 'complemento') {
            if(input.value === '') {
                controle = false
            }
        }
    })
    
    return controle
}

function validarInput(input) {
    switch(input.id) {
        case 'nome': return validarNome(input.value);
        case 'email': return validarEmail(input.value);
        case 'cpf': return validarCPF(input.value);
        case 'confirmar-senha': return inputConfirmaSenha.value === senha.value;
    }
}

dados.forEach((input) => {
    input.addEventListener('focusout', () => {
        if(input.value === '' || validarInput(input)) {
            input.classList = 'input'
        }
        else {
            input.classList = 'erro'
        }
    })
})

data.forEach((select) => {
    select.addEventListener('input', () => {
        if(validarNasc(parseInt(dia.value), parseInt(mes.value), parseInt(ano.value))) {
            data.forEach((e) => e.classList = 'input')
        }
        else {
            data.forEach((e) => e.classList = 'erro')
        }
    })
})

cep.addEventListener('focusout', () => {
    if(cep.value === '') {
        cep.classList = 'input'
    }
    else if(cep.value.length < 10) {
        cep.classList = 'erro'
    }
})

cep.addEventListener('input', () => {
    if(cep.value.length < 10) {
        cep.classList = 'input'
    }
    else buscaCEP(cep)
})

senha.addEventListener('focusin', () => {
    requisitos.style.display = 'flex'
    divConfirmaSenha.style.display = 'none'
})

senha.addEventListener('focusout', () => {
    if(senha.value === "" ) {
        requisitos.style.display = 'none'
        divConfirmaSenha.style.display = 'none'
    }
    else if (validarSenha(senha.value)) {
        requisitos.style.display = 'none'
        inputConfirmaSenha.value = ''
        inputConfirmaSenha.nextElementSibling.classList = 'label'
        divConfirmaSenha.style.display = 'flex'
    }
    else {
        requisitos.style.display = 'flex'
        divConfirmaSenha.style.display = 'none'
    }
})

senha.addEventListener('input', () => validarSenha(senha.value))
