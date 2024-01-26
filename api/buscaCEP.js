export default async function buscaCEP(cep){
    const cepLimpo = cep.value.replace(/\D/g, '').slice(0, 8)
    const endereco = document.getElementById('endereco')
    const inputs = endereco.querySelectorAll('.input')

    try {
        const responseAPI = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        const responseAPIConvert = await responseAPI.json()

        if (responseAPIConvert.erro) {
            throw Error('CEP inválido!')
        }
        else {
            const uf = document.getElementById('uf')
            const cidade = document.getElementById('cidade')
            const bairro = document.getElementById('bairro')
            const rua = document.getElementById('rua')

            uf.value = responseAPIConvert.uf
            cidade.value = responseAPIConvert.localidade
            bairro.value = responseAPIConvert.bairro
            rua.value = responseAPIConvert.logradouro

            cep.classList = 'input'

            inputs.forEach((input) => {
                let label = input.nextElementSibling

                if(input.value === "") {
                    label.classList = "label"
                }
                else {
                    label.classList = "label-focus"
                }
            })
        }
    }
    catch (erro){
        cep.classList = 'erro'
        console.error('CEP inválido!')
    }
}
