console.log("desde js");

// seleccino los elementos vinculados al HTML para procesar

const btnSuma = document.getElementById('btn-sumar');
const resultado = document.getElementById('resultado');
const num1 = document.getElementById('num1').value;
const num2 = document.getElementById('num2').value;
let resultadosuma;


// Evento clic

btnSuma.addEventListener('click', suma);



// Funcion 

function suma() {
    let num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    // instrucciones
    console.log(num1, num2);
    resultadosuma = num1 + num2;
    resultado.classList.add('bg-success');
    resultado.classList.add('text-light');
    resultado.textContent = `El resultado es ${resultadosuma}`;

}
