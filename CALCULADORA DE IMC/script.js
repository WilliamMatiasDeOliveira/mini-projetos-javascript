

    document.getElementById('medir').addEventListener('click', function(){
        nome = document.getElementById('nome').value.trim()
        altura = parseFloat(document.getElementById('altura').value.replace(",", "."))
        peso = parseFloat(document.getElementById('peso').value.replace(",", "."))

        const imc = peso / (altura * altura)
        let classificação = ""

        if(imc < 18.5){
            classificação = "baixo"
        } else if(imc < 25){
            classificação = "normal"
        } else if(imc < 30){
            classificação = "sobrepeso"
        } else {
            classificação = "obesidade"
        }

        alert(`${nome} voce esta com o indice de imc ${classificação}`)

        document.getElementById('nome').value = ""
        document.getElementById('altura').value = ""
        document.getElementById('peso').value = ""
    })
