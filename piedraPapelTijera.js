// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];
//    //

//-----------------------------------------------------;
//Declaracion de variables globales

//imagenes ordenador
var piedraMaquina = "/img/piedraOrdenador.png";
var papelMaquina = "/img/papelOrdenador.png";
var tijeraMaquina = "/img/tijeraOrdenador.png";

//-----------------------------------------------------;

//imagenes jugador
const piedraJugador = (document.getElementsByTagName("img")[0].src =
  "/img/piedraJugador.png");
const piedra = document.getElementsByTagName("img")[0];

const papelJugador = (document.getElementsByTagName("img")[1].src =
  "/img/papelJugador.png");
const papel = document.getElementsByTagName("img")[1];

const tijeraJugador = (document.getElementsByTagName("img")[2].src =
  "/img/tijeraJugador.png");
const tijera = document.getElementsByTagName("img")[2];

//-----------------------------------------------------;
var opcion = "";
const inicio = document.getElementsByTagName("button")[1];
const reset = document.getElementsByTagName("button")[2];

//-----------------------------------------------------;

//Acciones de los botones

//asignamos clase seleccionado y quitamos noSeleccionado
piedra.addEventListener("click", () => {
  piedra.classList.remove("noSeleccionado");
  piedra.classList.add("seleccionado");
  papel.classList.remove("seleccionado");
  papel.classList.add("noSeleccionado");
  tijera.classList.remove("seleccionado");
  tijera.classList.add("noSeleccionado");

  opcion = posibilidades[0];
});

papel.addEventListener("click", () => {
  //asignar la clase ("seleccionado");
  papel.classList.remove("noSeleccionado");
  papel.classList.add("seleccionado");
  piedra.classList.remove("seleccionado");
  piedra.classList.add("noSeleccionado");
  tijera.classList.remove("seleccionado");
  tijera.classList.add("noSeleccionado");

  opcion = posibilidades[1];
});

tijera.addEventListener("click", () => {
  tijera.classList.remove("noSeleccionado");
  tijera.classList.add("seleccionado");
  papel.classList.remove("seleccionado");
  papel.classList.add("noSeleccionado");
  piedra.classList.remove("seleccionado");
  piedra.classList.add("noSeleccionado");
  
  opcion = posibilidades[2];
});

//Boton de ¡YA!
inicio.addEventListener("click", () => {
  const user = play(opcion);//imagen del jugador
  const pc = imgOrdenador();//imagen de la maquina
  calcResult(user, pc);
});

reset.addEventListener("click", () => {
  resetButton();
});
//-----------------------------------------------------;

//opciones elegida por jugador
function play(userOption) {
  
  if (userOption === posibilidades[0]) {
    return posibilidades[0];
  }
  if (userOption === posibilidades[1]) {
    return posibilidades[1];
  }
  if (userOption === posibilidades[2]) {
    return posibilidades[2];
  }
}

//-----------------------------------------------------;

//asignar imagenes a maquina
function imgOrdenador() {
  var computerOption =
    posibilidades[Math.floor(Math.random() * posibilidades.length)];

  if (computerOption === posibilidades[0]) {
    document.getElementsByTagName("img")[3].src = piedraMaquina;
  }
  if (computerOption === posibilidades[1]) {
    document.getElementsByTagName("img")[3].src = papelMaquina;
  }
  if (computerOption === posibilidades[2]) {
    document.getElementsByTagName("img")[3].src = tijeraMaquina;
  }
  return computerOption;

}

//-----------------------------------------------------;

//calcular resultado
function calcResult(userOption, computerOption) {

  if (userOption === computerOption) {
    console.log("Empate");
  } else if (
    (userOption === posibilidades[0] && computerOption === posibilidades[2]) ||
    (userOption === posibilidades[1] && computerOption === posibilidades[0]) ||
    (userOption === posibilidades[2] && computerOption === posibilidades[1])
  ) {
    console.log("Ganaste");
  } else {
    console.log("Perdiste");
  }
}

//-----------------------------------------------------;

function resetButton() {
  piedra.classList.add("seleccionado");
  piedra.classList.remove("noSeleccionado");
  papel.classList.remove("seleccionado");
  papel.classList.add("noSeleccionado");
  tijera.classList.remove("seleccionado");
  tijera.classList.add("noSeleccionado");
  document.getElementsByTagName("img")[3].src = "/img/defecto.png";
  opcion = "";
}

