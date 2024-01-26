export default function formatarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D/g, '').slice(0, 11)
    
    if(cpfLimpo.length <= 3) {
        return cpfLimpo.substring(0, 3)
    }
    else if(cpfLimpo.length <= 6) {
        return cpfLimpo.substring(0, 3) + "." + cpfLimpo.substring(3, 6)
    }
    else if(cpfLimpo.length <= 9) {
        return cpfLimpo.substring(0, 3) + "." + cpfLimpo.substring(3, 6) + "." + cpfLimpo.substring(6, 9)
    }
    else {
        return cpfLimpo.substring(0, 3) + "." + cpfLimpo.substring(3, 6) + "." + cpfLimpo.substring(6, 9) + "-" + cpfLimpo.substring(9)
    }
}
