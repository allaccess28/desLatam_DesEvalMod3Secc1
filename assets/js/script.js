
let wins = 0;
let loose = 0;
let tie = 0;
let opcionJugador;
let opcionCpu;
let contador = 0;
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const finalScore = document.getElementById('finalScore');
const choice = ["papel", "piedra", "tijera"];
solicitar();

function jugar() {
  if (juegosRestantes > 0) {
    btnPiedra.addEventListener("click", function () {
      opcionJugador = "piedra";
      cpu();
    });

    btnPapel.addEventListener("click", function () {
      opcionJugador = "papel";

      cpu();
    });

    btnTijera.addEventListener("click", function () {
      opcionJugador = "tijera";

      cpu();
    });
    juegosRestantes--;
    console.log(juegosRestantes);
    console.log(contador);
  } else {
    alert("se te acabaron las oportunidades");
  }
}

function cpu() {
  opcionCpu = choice[Math.floor(Math.random() * 3)];
  compare();
}
function compare() {
  if (opcionJugador == opcionCpu) {
    playerScore.textContent = `JUGADOR: ${opcionJugador}`;
    cpuScore.textContent = `COMPUTADOR: ${opcionCpu}`;
    totalScore.textContent = "Empate!";
    tie += 1;
  } else if (opcionJugador == "piedra" && opcionCpu == "tijera") {
    playerScore.textContent = `JUGADOR: ${opcionJugador}`;
    cpuScore.textContent = `COMPUTADOR: ${opcionCpu}`;
    totalScore.textContent = "Ganaste!";
    wins += 1;
  } else if (opcionJugador == "papel" && opcionCpu == "piedra") {
    playerScore.textContent = `JUGADOR: ${opcionJugador}`;
    cpuScore.textContent = `COMPUTADOR: ${opcionCpu}`;
    totalScore.textContent = "Ganaste!";
    wins += 1;
  } else if (opcionJugador == "tijera" && opcionCpu == "papel") {
    playerScore.textContent = `JUGADOR: ${opcionJugador}`;
    cpuScore.textContent = `COMPUTADOR: ${opcionCpu}`;
    totalScore.textContent = "Ganaste!";
    wins += 1;
  } else {
    playerScore.textContent = `JUGADOR: ${opcionJugador}`;
    cpuScore.textContent = `COMPUTADOR: ${opcionCpu}`;
    totalScore.textContent = "Perdiste!";
    loose += 1;
  }
  if(wins>loose && wins>tie){
    finalScore.textContent = "Ganaste el Total";
  }else if( loose>wins && loose>tie){
    finalScore.textContent = "El Compu te ganó";
  }else if(tie>wins && tie>loose){
    finalScore.textContent = "Ambos somos igual de buenos!"
  }
  wines.textContent = `Ganadas: ${wins}`;
  looses.textContent = `Perdidas: ${loose}`;
  ties.textContent = `Empates: ${tie}`;
}

function appear() {
  document.getElementById("choice").style.display = "block";
  document.getElementById("playerScore").style.display = "block";
  document.getElementById("totalScore").style.display = "block";
  document.getElementById("cpuScore").style.display = "block";
  document.getElementById("scores").style.display = "block";
  document.getElementById("welcome").style.display = "none";
}

function dissapear() {
  document.getElementById("choice").style.display = "none";
  document.getElementById("playerScore").style.display = "none";
  document.getElementById("totalScore").style.display = "none";
  document.getElementById("cpuScore").style.display = "none";
  document.getElementById("scores").style.display = "none";
  document.getElementById("welcome").style.display = "block";
}
/* function counting() {}
if (contador > t) {
  document.getElementById("choice").style.display = "none";
  document.getElementById("playerScore").style.display = "none";
  document.getElementById("totalScore").style.display = "none";
  document.getElementById("cpuScore").style.display = "none";
  document.getElementById("scores").style.display = "none";
  document.getElementById("welcome").style.display = "block";
} */

function solicitar() {
  const t = parseInt(
    prompt("Elige cuantas veces quieres jugar...te advierto que soy bueno")
  );
  if (!isNaN(t) && t > 0) {
    juegosRestantes = t;
    window.addEventListener("click", jugar(juegosRestantes));
  } else {
    alert("introduce un numero valido");
    solicitar();
  }
  return juegosRestantes;
}

/* if (wins > loose) {
    alert("maldito, me ganaste");
} else if (loose > wins) {
    alert("jajajajaja, perdiste");
} else if (tie > wins || tie > loose) {
    alert("somos malitos los dos");
} */
