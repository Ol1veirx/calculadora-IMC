function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if(!isNaN(peso) && !isNaN(altura) && altura > 0){
        const imc = peso / (altura*altura);

        const res = document.getElementById("resultado");
        res.innerText = imc.toFixed(2);
    }else{
        alert("Por favor, insira os valores válidos para o peso e altura!");
    }
}

