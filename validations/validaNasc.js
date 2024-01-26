export default function validarNasc(dia, mes, ano) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    if(isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        return true
    }
    else if (mes === 2 && ((ano % 4 === 0 && dia > 29) || (ano % 4 !== 0 && dia > 28))) {
        return false
    }
    else if ([4, 6, 9, 11].includes(mes) && dia > 30) {
        return false
    }
    else if (ano > anoAtual || (ano === anoAtual && mes > mesAtual) || (ano === anoAtual && mes === mesAtual && dia > diaAtual)) {
        return false
    }
    else {
        return true
    }
}
