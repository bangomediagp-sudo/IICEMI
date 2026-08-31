var mostrar = document.getElementById('mais')
var mudar = document.querySelectorAll('.delete')


mostrar.addEventListener('click', function () {
        mostrar.textContent = 'ver menos'
        mudar.forEach(function (elemento) {
            elemento.style.display= 'block'
        })

        mostrar.addEventListener('click',function () {
            mostrar.textContent ='Ver mais cursos de curta duracao'
            mudar.forEach(function (elemento) {
                elemento.style.display= 'none'
            })
        })
})

var formando = document.getElementById('formando')

formando.addEventListener('click', function () {
    window.location.href = 'area_formandos.html'
})