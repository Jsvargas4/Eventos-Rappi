function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir cm a metros

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        const clasificacion = clasificarIMC(imc);

        document.getElementById('imc').textContent = imc.toFixed(2);
        document.getElementById('clasificacion').textContent = clasificacion;
    } else {
        alert('Por favor, ingrese valores válidos para peso y altura.');
    }
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc > 30){
        return 'Obesidad';
    }
}
