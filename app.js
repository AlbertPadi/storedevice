const formulario = document.getElementById('form');
const checkbox = document.getElementById('activador')
const video = document.getElementById('video'),
    boton_play = document.getElementById('play'),
    boton_pause = document.getElementById('pause')
/*
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    let mail = document.getElementById('email-form').value
    console.log(mail)
})
*/
/*Event Change*/
/*
checkbox.addEventListener('change', e =>{
    if(e.target.checked) {
        console.log('Solicitud aceptada')
    }else{
        alert('Debe aceptar los terminos y condiciones')
    }
})
*/

/*EVENTO VIDEO*/
boton_play.addEventListener('click', ()=>{
    video.play();
})

boton_pause.addEventListener('click', ()=>{
    video.pause();
})










