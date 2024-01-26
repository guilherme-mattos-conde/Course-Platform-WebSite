import cursos from "../mocks/cursos.js"

const gradeCursos = document.getElementById('grade-cursos')
const cursosBackend = document.getElementById('lista-backend')
const cursosFrontend = document.getElementById('lista-frontend')
const cursosFramework = document.getElementById('lista-framework')
const cursosBD = document.getElementById('lista-bd')

cursos.forEach((curso) => {
    gradeCursos.innerHTML += `<li class="cursos"><a href="#"><img src="${curso.icon}">${curso.nome}</a></li>`
    
    switch (curso.classificacao) {
        case "backend": adicionaCurso(cursosBackend, curso.nome); break;
        case "frontend": adicionaCurso(cursosFrontend, curso.nome); break;
        case "framework": adicionaCurso(cursosFramework, curso.nome); break;
        case "banco de dados": adicionaCurso(cursosBD, curso.nome); break;
    }

    function adicionaCurso(categoria, curso) {
        categoria.innerHTML += `<a class="cursos" href="#">${curso}</a>`
    }
})
