const onOff = document.getElementById('onOff')
const lamp = document.getElementById('lamp')

function isLampBreak() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if(!isLampBreak()){
        lamp.src = 'imgs/ligada.jpg'
    }
}

function lampOff() {
    if(!isLampBreak()){
        lamp.src = 'imgs/desligada.jpg'
    }
}

function lampBreak(){
    lamp.src = 'imgs/quebrada.jpg'
}

function lampOnOff(){
    if(onOff.textContent == 'Ligar'){
        lampOn()
        onOff.textContent = "Desligar"
    }else{
        lampOff()
        onOff.textContent = "Ligar"
    }
}


onOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBreak)