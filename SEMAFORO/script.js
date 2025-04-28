const img = document.getElementById("img")
const button = document.getElementById('buttons')
let index = 0

const trafic = (event) => {
    ligar[event.target.id]()
}

const nextIndex = () => {
    if(index < 2){
        index++
    }else{
        index = 0
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[index]
    ligar[color]()
    nextIndex()
}

const ligar = {
    'red': () => img.src = 'imgs/vermelho.png',
    'yellow': () => img.src = 'imgs/amarelo.png',
    'green': () => img.src = 'imgs/verde.png',
    'automatic': () => setInterval(changeColor, 1000)
}

button.addEventListener('click', trafic)