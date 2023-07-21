/**
 * Es el javascript del uso de encriptar y desencriptar
 */

const myButton = document.getElementById("Encriptar");
const myButton2 = document.getElementById("Desencriptar");
document.getElementById("imagen").style.display = "none"; 
myButton.addEventListener("click", function() {
  let info = document.getElementById("message").value;
  
// Validar que solo haya letras minúsculas sin acentos y espacios
if (/^[a-z\s]+$/.test(info)) {
  // Reemplazar cada letra por su respectiva llave de encriptación
  let textoEncriptado = info
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("answer").value = textoEncriptado;
  document.getElementById("answer").style.display = "block"; 
  document.getElementById("imagen").style.display = "none"; 
} else if (info =='') {
  mostrarImagen();
} else {
  mostrarImagen();
}

});


myButton2.addEventListener("click", function() {
  let info = document.getElementById("message").value;

  // Validar que solo haya letras minúsculas sin acentos y con espacios
  if (/^[a-z\s]+$/.test(info)) {
    // Reemplazar cada letra por su respectiva llave de encriptación
    let texto = info
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("answer").value = texto;
  } else if (info.length <= 0) {
    mostrarImagen()
  }else{
    mostrarImagen()
  }
});

function copiarTexto() {
  /* Obtener el elemento de entrada de texto */
  var texto = document.getElementById("answer");

  /* Seleccionar el texto del campo de entrada */
  texto.select();
  texto.setSelectionRange(0, 99999); /* Para dispositivos móviles */

  /* Copiar el texto al portapapeles */
  document.execCommand("copy");

  /* Mostrar mensaje de copiado */
  alert("Texto copiado");
}

function mostrarImagen() {
  document.getElementById("answer").style.display = "none"; // Ocultar el textarea
  document.getElementById("imagen").style.display = "block"; // Mostrar la imagen
}