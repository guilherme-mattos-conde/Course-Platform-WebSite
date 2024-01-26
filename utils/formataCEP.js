export default function formatarCPF(cep) {
    const cepLimpo = cep.replace(/\D/g, '').slice(0, 8)
    
    if(cepLimpo.length <= 2) {
        return cepLimpo.substring(0, 2)
    }
    else if(cepLimpo.length <= 5) {
        return cepLimpo.substring(0, 2) + "." + cepLimpo.substring(2, 5)
    }
    else {
        return cepLimpo.substring(0, 2) + "." + cepLimpo.substring(2, 5) + "-" + cepLimpo.substring(5, 8)
    }
}
