const tasasDeCambio = {
    // Tasa de cambio USD a EUR (ejemplo)
    USD: {
        EUR: 0.82,
        COP: 4700
    },
    EUR: {
        USD: 1.22,
        COP: 6000
    },
    COP: {
        USD: 0.0021,
        EUR: 0.000167
    },
    
};

function convertirDivisas() {
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const montoOrigen = parseFloat(document.getElementById('montoOrigen').value);
    const monedaDestino = document.getElementById('monedaDestino').value;

    if (monedaOrigen === monedaDestino) {
        alert('Las monedas no pueden ser las mismas.');
        return;
    }

    const tasaDeCambio = tasasDeCambio[monedaOrigen][monedaDestino];
    const montoConvertido = montoOrigen * tasaDeCambio;

    document.getElementById('montoDestino').value = montoConvertido.toFixed(2);
}
