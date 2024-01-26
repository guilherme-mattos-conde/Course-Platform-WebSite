import estados from "../mocks/estados.js"

const selectEstado = document.getElementById('uf')
const inputDia = document.getElementById('dia')
const inputMes = document.getElementById('mes')
const inputAno = document.getElementById('ano')
const inputs = document.querySelectorAll('.input')

inputs.forEach((input) => {
    let label = input.nextElementSibling
    
    if(input.type !== 'submit') {
        input.addEventListener('focusin', () => {
            label.classList = "label-focus"
        })
    
        input.addEventListener('focusout', () => {
            if(input.value === "") {
                label.classList = "label"
            }
        })
    
        input.addEventListener('input', () => {  
            if(input.value === "") {
                label.classList = "label"
            }
            else {
                label.classList = "label-focus"
            }
        })
    }
})

estados.forEach((obj) => {
    selectEstado.innerHTML += `<option value="${obj.uf}">${obj.uf}</option>`
})

for(let dia = 1; dia <= 31; dia++) {
    inputDia.innerHTML += `<option value="${dia}">${dia}</option>`
}
for(let mes = 1; mes <= 12; mes++) {
    inputMes.innerHTML += `<option value="${mes}">${mes}</option>`
}
for(let ano = new Date().getFullYear(); ano >= 1900; ano--) {
    inputAno.innerHTML += `<option value="${ano}">${ano}</option>`
}
