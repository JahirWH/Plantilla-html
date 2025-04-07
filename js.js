window.onload = function loadbar() {
    x = document.getElementById('loadbar')
    x.style.display = "none";
};

function text() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  
  // Transición suave
  text1.style.transition = text2.style.transition = 'opacity 0.3s ease';
  
  if (text1.style.display === 'block' || text1.style.display === '') {
    text1.style.opacity = '0';
    setTimeout(() => {
      text1.style.display = 'none';
      text2.style.display = 'block';
      setTimeout(() => text2.style.opacity = '1', 10);
    }, 300);
  } else {
    text2.style.opacity = '0';
    setTimeout(() => {
      text2.style.display = 'none';
      text1.style.display = 'block';
      setTimeout(() => text1.style.opacity = '1', 10);
    }, 300);
  }
}



function enviarCorreo() {
    let email = "ejemplo@gmail.com";
    let subject = "Asunto del correo";
    let body = "Hola, este es un ejemplo.";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function index(){
    let sd = document.getElementById('certifications');
    let ss = document.getElementById('principal');
    let ab = document.getElementById('about');
    ab.style.display = 'none';
    sd.style.display = 'none';
    ss.style.display = 'block'; 
}


function certifications(){
    let sd = document.getElementById('certifications');
    let ab = document.getElementById('about');
    let ss = document.getElementById('principal');
    ss.style.display = 'none';
    ab.style.display = 'none';
    sd.style.display = 'block';

}
function about(){
    let sd = document.getElementById('certifications');
    let ss = document.getElementById('principal');
    let ab = document.getElementById('about');
    ss.style.display = 'none';
    sd.style.display = 'none';
    ab.style.display = 'block';
}




document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".bloque"); 
    const bars = document.querySelectorAll(".bar"); 
    const names = document.querySelectorAll(".name"); 

    boxes.forEach((box, index) => {
        box.addEventListener("click", (event) => {
            event.stopPropagation(); // Evita que el clic se propague al `document`
            
            // Activa el bloque actual
            box.classList.toggle("bloque_activo");

            // Activa la barra correspondiente
            if (bars[index]) {
                bars[index].classList.toggle("bar_activo");
            }

            // Activa el nombre correspondiente
            if (names[index]) {
                names[index].classList.toggle("name_activo");
            }
        });
    });

    // Si se hace clic fuera de los elementos, se desactivan todas las clases
    document.addEventListener("click", () => {
        boxes.forEach((box) => box.classList.remove("bloque_activo"));
        bars.forEach((bar) => bar.classList.remove("bar_activo"));
        names.forEach((name) => name.classList.remove("name_activo"));
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".li-cer"); 
    const bars = document.querySelectorAll(".li-div"); 

    boxes.forEach((box, index) => {
        box.addEventListener("click", (event) => {
            event.stopPropagation(); // Evita que el clic se propague al `document`
            
            // Activa el bloque actual

            // Activa la barra correspondiente
            if (bars[index]) {
                bars[index].classList.toggle("li-div_activo");
            }

   
        });
    });

    // Si se hace clic fuera de los elementos, se desactivan todas las clases
    document.addEventListener("click", () => {
        bars.forEach((bar) => bar.classList.remove("li-div_activo"));
    });
});



function cerrar() {
    const text = document.getElementById('info_text');
    const div = document.getElementById('active');
    if (div) {
        text.style.display = "block";
        div.classList.add('hide'); // Agrega la animación de salida
        setTimeout(() => {
            div.style.display = "none"; // Oculta el div después de la animación
            div.classList.remove('hide'); // Limpia la clase para futuras transiciones
        }, 500); // Tiempo igual al de la animación CSS (0.5s)
    }
}

function cambiarDistro(nombre, imgSrc, tiempo, info) {
    // const text = document.getElementById('info_text');
    const div = document.getElementById('active');
    if (div) {
        // text.style.display = "none";
        div.style.display = "block"; // Muestra el div antes de animarlo
        setTimeout(() => {
            div.classList.add('show'); // Agrega la animación de entrada
        }, 10);
    }

    document.getElementById("img").innerHTML = `<img src="${imgSrc}" alt="${nombre}">`;
    document.getElementById("text").innerHTML = `
        <p>${nombre}</p>
        <p>Tiempo de uso: ${tiempo}</p>
    `;
    document.getElementById('text_info').innerHTML = `<p>${info}</p>`;
}


let currentActive = 0; // Inicia con el primer div (índice 0)
const totalDivs = 3;   // Total de divs a rotar

function rotarDivs() {
    // Oculta todos los divs primero
    for (let i = 1; i <= totalDivs; i++) {
        document.getElementById(`perfil_txt${i}`).style.display = 'none';
    }
    
    // Avanza al siguiente div
    currentActive = (currentActive % totalDivs) + 1;
    
    // Muestra el div actual
    document.getElementById(`perfil_txt${currentActive}`).style.display = 'block';
}

// Inicialización: asegurarse que solo el primer div esté visible al cargar
document.addEventListener('DOMContentLoaded', function() {
    rotarDivs(); // Esto mostrará solo el primer div
});

function vistaso1() {
    let h = document.getElementById('i1');

    if (h.style.display === "none" || h.style.display === "") {
        h.style.display = "block"; // Lo mostramos
    } else {
        h.style.display = "none";  // Lo ocultamos
    }
}
function vistaso2() {
    let h = document.getElementById('i2');

    if (h.style.display === "none" || h.style.display === "") {
        h.style.display = "block"; // Lo mostramos
    } else {
        h.style.display = "none";  // Lo ocultamos
    }
}
function vistaso3() {
    let h = document.getElementById('i3');

    if (h.style.display === "none" || h.style.display === "") {
        h.style.display = "block"; // Lo mostramos
    } else {
        h.style.display = "none";  // Lo ocultamos
    }
}
function vistaso4() {
    let h = document.getElementById('i4');

    if (h.style.display === "none" || h.style.display === "") {
        h.style.display = "block"; // Lo mostramos
    } else {
        h.style.display = "none";  // Lo ocultamos
    }
}

