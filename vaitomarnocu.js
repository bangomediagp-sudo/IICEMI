let counter= 1

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},3000)

function nextImage(){
    counter++;
    if (counter>4){
        counter=1;
    }

    document.getElementById("radio"+counter).checked = true;
}

let trocar = document.getElementById('edy')
trocar.addEventListener('click',function(){
    window.location.href='cursos.html'});

