// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];
//    //

var jugarBotton = document.getElementsByTagName("button")[0];
var jugador = document.getElementsByTagName("input")[0];
var jugadorInput = "";
var partidas = document.getElementsByTagName("input")[1];
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
var partidasInput = 0;
var prueba = true;

jugarBotton.addEventListener("click", function () {
  jugadorInput = jugador.value;
  partidasInput = partidas.value;
  comprobarJugador(jugadorInput);
  comprobarPartidas(partidasInput);

  if (
    jugador.classList.contains("fondoRojo") ||
    partidas.classList.contains("fondoRojo")
  ) {
    prueba = false;
  } else {
    document.getElementById("total").innerHTML = partidasInput;
    prueba = true;
  }

  //cambiar el interior de id total por partidasInput
});

function comprobarJugador(player) {
  if (player.length <= 3 || !isNaN(player[0]) || player === "") {
    jugador.classList.add("fondoRojo");
  } else {
    jugador.classList.remove("fondoRojo");
    jugador.readOnly = true;
  }
}

function comprobarPartidas(jugadas) {
  if (jugadas <= 0) {
    partidas.classList.add("fondoRojo");
  } else {
    partidas.classList.remove("fondoRojo");
    partidas.readOnly = true;
  }
}


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
  if (prueba) {
    let id = document.getElementById("actual").innerHTML;
    id = parseInt(id);

    if (id < partidasInput) {
      id += 1;
      document.getElementById("actual").innerHTML = id;

      const user = play(opcion); //imagen del jugador
      const pc = imgOrdenador(); //imagen de la maquina
      calcResult(user, pc);
    }
  }
});

reset.addEventListener("click", () => {
  resetButton();
});
//-----------------------------------------------------;

//opciones elegida por jugador
function play(userOption) {
  for (let i = 0; i < posibilidades.length; i++) {
    const element = posibilidades[i];
    if (userOption === element) {
      return element;
    }
  }
}
//-----------------------------------------------------;

//asignar imagenes a maquina
function imgOrdenador() {
  var computerOption =
    posibilidades[Math.floor(Math.random() * posibilidades.length)];

  for (let i = 0; i < posibilidades.length; i++) {
    const element = posibilidades[i];

    if (computerOption === element) {
      document.getElementsByTagName("img")[3].src =
        "/img/" + computerOption + "Ordenador.png";
    }
  }
  return computerOption;
}

//-----------------------------------------------------;

//calcular resultado

function calcResult(userOption, computerOption) {
  for (let i = 0; i < posibilidades.length; i++) {
    const element = posibilidades[i];

    if (userOption === element && computerOption === element) {
      document.getElementById("historial").innerHTML += "<li>Empate</li>";
    } else if (
      userOption === element &&
      computerOption === posibilidades[i - 1] 
    ) {
      document.getElementById("historial").innerHTML +=
        "<li>Gana " + jugadorInput + "</li>";
    }
    //comprobar no salirse de rango
    else if (
      userOption === element &&
      computerOption === posibilidades[i + 1]
    ) {
      document.getElementById("historial").innerHTML +=
        "<li>Gana la máquina</li>";
    }
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
  partidasInput = 0;
  partidas.value = 0;
  partidas.readOnly = false;
  jugador.readOnly = false;
  document.getElementById("total").innerHTML = partidasInput;
  document.getElementById("actual").innerHTML = partidasInput;
  document.getElementById("historial").innerHTML += "<li>Nueva partida</li>";
}
