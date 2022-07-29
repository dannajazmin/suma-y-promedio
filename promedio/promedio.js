console.log("desde js");

// seleccino los elementos vinculados al HTML para procesar

const boton = document.getElementById('boton');

const resultado = document.getElementById('resultado');

let suma;

let promediofinal;


// Evento clic

boton.addEventListener('click', prome);



// Funcion 

function prome() {
    let num1 = document.getElementById('num1').value;

    num1 = parseInt(num1);

    let num2 = document.getElementById('num2').value;

    num2 = parseInt(num2);

    let num3 = document.getElementById('num3').value;

    num3 = parseInt(num3);

    let num4 = document.getElementById('num4').value;

    num4 = parseInt(num4);

    // instrucciones
    console.log(num1, num2, num3, num4);

    suma= num1 + num2 + num3 + num4;
    promediofinal = suma/ 4


if(promediofinal>=7){
    resultado.classList.remove("bg-danger")
    resultado.classList.add("bg-sucess")

}

else {
    resultado.classList.remove("bg-sucess")
    resultado.classList.add("bg-danger")
}




    resultado.classList.add('bg-success');
    resultado.classList.add('text-light');
    resultado.textContent = `El resultado es ${promediofinal}`;
}