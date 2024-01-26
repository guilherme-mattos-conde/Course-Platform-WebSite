const seta = document.getElementById('botao-voltar')

seta.addEventListener('click', () => goTo(0))

addEventListener('scroll', () => {
    var topo = document.documentElement.scrollTop
    
    if(topo >= 200) {
        seta.style.display = "flex"
    }
    else {
        seta.style.display = "none"
    }
})

function redirecionar(tela) {
    window.location.href = tela
}

function mostrarSecao(id) {
    var section = document.getElementById(id)
    var topo = section.offsetTop - 100

    goTo(topo)
}

function goTo(topo) {
    window.scrollTo({
        top: topo,
        behavior: 'smooth'
    })
}