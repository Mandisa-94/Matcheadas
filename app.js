const boxGame = document.getElementById ('box-game');
const timeGame = document.getElementById ('time-game');
const botonAyuda = document.getElementById ('boton-ayuda');
const botonReinicia = document.getElementById ('boton-reinicia');

let items = ['🗽', '⚡', '🪐', '🚀', '👁‍🗨'];
let level;
let callModal = true;
let time
let startTimer

 //TIMER//
 const timer = () => {
    startTimer =  setInterval(()=>{
       if(time > 0){
           time --
           timeGame.innerHTML = time
         }else {
             gameOver();
           }
        }, 1000);
        return time;
   }

   const stopTimer = () =>{
       clearInterval(startTimer); 
   };

// MODAL BIENVENIDA//
const bienvenida = () => {
    stopTimer()
    swal({
        title: '¡Welcome!',
        text: ` En MatcheADAs tu objetivo es juntar tres o más figuras del mismo tipo, ya sea en fila o columna. Para eso, selecciona una figura y a continuación una figura adyacente para intercambiarlas de lugar.

        Si se forma un grupo, esas figuras se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!

        Controles
        Click izquierdo: selección
        Enter o Espaciado: selección
        Flechas o WASD: movimiento e intercambio
        `,
        button: 'A jugar',
  })

  .then((X) => {
    if (callModal) {
        seleccionNivel();
      return callModal = false;
    } else if (!callModal){
     timer()
    }
});
    
};
window.onload = bienvenida();



 //MODAL SELECCION DE NIVELES//
 const seleccionNivel = () => {
    swal ({
    title:'Nuevo juego !',
    text: 'Selecciona una dificultad',
    buttons: {
        facil: {
            text: 'Facil',
            value: 'facil',
        },
        normal: {
            text: 'Normal',
            value: 'normal',
        },
        dificil: {
            text: 'Dificil',
            value: 'dificil',
        },
    },
    closeOnClickOutside: false,
    closeOnEsc: false,
})
.then(
    (value)=>{
        switch (value) {
            case 'facil':
                level = 9;
                break;

           case 'normal':
               level = 8;
               break;

          case 'dificil':
              level = 7;
              break;
              default:
        }
        crearTablero(level)
    })
  };



//MODAL GAME OVER//
const gameOver = () =>{
    swal({
        title: '¡Juego Terminado!',
        text: `Puntaje Final: 0`,
        buttons: {
            juegoNuevo: {
                text: 'Nuevo Juego',
                value: 'nuevoJuego'
            },
            reestablecer:{
                text:'Reiniciar',
                value: 'reiniciar'
            }
        },

    })
    .then((value) => {
        switch (value) {
            case 'nuevoJuego':
                seleccionNivel();
                break;
                case 'reiniciar':
                    crearTablero(level);
                    break;
                }
            });
            stopTimer();

};

//MODAL REINICIAR//


const reiniciarJuego = () =>{
    stopTimer()
    swal({
        title: '¿Esta seguro de que desea reiniciar?',
        text: `Perderas todo tu puntaje acumulado`,
        buttons: {
            juegoNuevo: {
                text: 'Nuevo Juego',
                value: 'nuevoJuego'
            },
                cancel: "Cancelar",   
            
        },
    })
    .then((value) =>{
        
        switch (value){

            case 'nuevoJuego':
                seleccionNivel();
                break;
            case null:
                timer()
                break;

        }

    })
};

//BOTONES INFO + REINICIAR//

botonReinicia.addEventListener ('click', reiniciarJuego);
botonAyuda.addEventListener ('click', bienvenida);
