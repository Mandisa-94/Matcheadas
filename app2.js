 
//GENERADOR DE GRILLA//
 const tamañoGrilla = (nivel, p) => {
    boxGame.style.height = `${boxGame.clientWidth}px`
    p.style.width = `calc(${boxGame.clientWidth}px / ${nivel} - 1.01rem)`;
    p.style.height = `calc(${boxGame.clientWidth}px  / ${nivel} - 1.01rem)`;
   }

const crearTablero = (nivel) => {
    time = 30;
    boxGame.innerHTML = ''
    for (let i = 0 ; i < nivel; i++){
        for (let j = 0; j < nivel; j++){
            const newP = document.createElement('p');
            newP.dataset.x = i
            newP.dataset.y = j
            tamañoGrilla(nivel, newP)
            newP.innerHTML = items[getRandom (0, 4)]
            newP.addEventListener ('click', seleccionarItem)   
            boxGame.appendChild(newP);
            twemoji.parse(document.body);
        }
    }
 timer()
};

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const seleccionarItem = (e) =>{
let seleccionado = document.querySelector('.seleccionado');
if(seleccionado){
console.log('tiene la clase')
}else{
    e.target.classList.add('seleccionado');

}
};