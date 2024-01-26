export default function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D/g, '').slice(0, 11)

    function validaPrimeiroDigito(cpfLimpo) {
        let soma = 0
        let multiplicador = 10
    
        for (let tamanho = 0; tamanho < 9; tamanho++) {
            soma += cpfLimpo[tamanho] * multiplicador
            multiplicador--
        }
    
        soma = (soma * 10) % 11;
    
        if (soma == 10 || soma == 11) {
            soma = 0
        }
    
        return soma == cpfLimpo[9]
    }
    
    function validaSegundoDigito(cpfLimpo) {
        let soma = 0
        let multiplicador = 11
    
        for (let tamanho = 0; tamanho < 10; tamanho++) {
            soma += cpfLimpo[tamanho] * multiplicador
            multiplicador--
        }
    
        soma = (soma * 10) % 11
    
        if (soma == 10 || soma == 11) {
            soma = 0
        }
    
        return soma == cpfLimpo[10];
    }

    return validaPrimeiroDigito(cpfLimpo) && validaSegundoDigito(cpfLimpo)
}
