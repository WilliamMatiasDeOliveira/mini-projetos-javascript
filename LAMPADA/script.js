const on = document.getElementById('on')
const off = document.getElementById('off')
const lamp = document.getElementById('lamp')

function lampOn () {
    lamp.src = 'imgs/ligada.jpg'
}

function lampOff() {
    lamp.src = 'imgs/desligada.jpg'
}

function lampBreak(){
    lamp.src = 'imgs/quebrada.jpg'
}


on.addEventListener('click', lampOn)
off.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBreak)