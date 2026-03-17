
document.addEventListener('DOMContentLoaded', () =>{
    initReveal();
    initNav();
    initHamburger();
    initForm();
});


//=====================
//MODULO: Animaciones al hacer scroll
//=====================
function initReveal(){
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add('visible');
        }
    });
  });
  elements.forEach(el => observer.observe(el));
}

//=====================
//MODULO: Comportamiento del nav
//=====================
function initNav(){
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    } else{
        nav.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link =>{
    link.addEventListener('click', (event)=>{
      event.preventDefault();

      const destino = link.getAttribute('href');
      const elemento = document.querySelector(destino);

      elemento.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

//=====================
//MODULO: Menú movil
//=====================
function initHamburger(){
   const btnHamburger = document.querySelector('.nav__hamburger');
   const navBar = document.querySelector('.nav__links');
   const navLinks = document.querySelectorAll('.nav__link');

   btnHamburger.addEventListener('click', ()=>{
    navBar.classList.toggle('open');
   });

   navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
      navBar.classList.remove('open');
    });
   });
}

//=====================
//MODULO: Validación Formulario
//=====================

function initForm(){
  const form = document.querySelector('.contact__form');
  const campos = {
    nombre: document.getElementById('nombre'),
    correo: document.getElementById('correo'),
    asunto: document.getElementById('asunto'),
    mensaje: document.getElementById('mensaje')
  };

  form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const valores = {
      nombre: campos.nombre.value.trim(),
      correo: campos.correo.value.trim(),
      asunto: campos.asunto.value.trim(),
      mensaje: campos.mensaje.value.trim()
    };

    limpiarErrores(campos);

    const errores = validarFormulario(valores);

    if(errores.length > 0){
      mostrarErrores(errores, campos);
      return;
    }
    
    fetch('https://formspree.io/f/xlgpowob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(valores)
    })
    .then(response =>{
      if(response.ok){
        form.reset();
        alert('¡Mensaje enviado correctamente!');
      } else{
        alert('Hubo un error, intenta de nuevo');
      }
    })
    .catch(() =>{
      alert('Hubo un error de conexion');
    })
  });
}

function validarFormulario(valores){
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errores = [];

  if(valores.nombre === '') errores.push({ campo: 'nombre', mensaje: 'El nombre es requerido' });
  if(valores.correo === '') errores.push({ campo: 'correo', mensaje: 'El correo es requerido' });
  if(valores.correo !== '' && !regexCorreo.test(valores.correo)) errores.push({ campo: 'correo', mensaje: 'El correo no es válido' });
  if(valores.asunto === '') errores.push({ campo: 'asunto', mensaje: 'El asunto es requerido' });
  if(valores.mensaje === '') errores.push({ campo: 'mensaje', mensaje: 'El mensaje es requerido' });

  return errores;
}

function mostrarErrores(errores, campos){
  errores.forEach(error =>{
    const campo = campos[error.campo];
    campo.classList.add('input--error');

    const mensajeError = document.createElement('span');
    mensajeError.classList.add('campo__error');
    mensajeError.textContent = error.mensaje;
    campo.parentElement.appendChild(mensajeError);
  });
}

function limpiarErrores(campos){
  Object.values(campos).forEach(campo =>{
    campo.classList.remove('input--error');
    const errorAnterior = campo.parentElement.querySelector('.campo__error');
    if(errorAnterior) errorAnterior.remove();
  });
}