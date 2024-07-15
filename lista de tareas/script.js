// Array para almacenar las notas
let notas = [
    { id: 1, titulo: "Tarea 1", texto: "Actividad Matematicas", realizada: false },
    { id: 2, titulo: "Tarea 2", texto: "ir al Gym", realizada: true },
];

// Variable para controlar el ID de las notas
let idGlobal = 2;

// Función para pintar las notas
function pintarNotas() {
    const contenedorNotas = document.getElementById('contenedor-notas');
    contenedorNotas.innerHTML = ''; // Limpiar el contenedor antes de pintar

    // Filtrar las notas según los criterios seleccionados
    const notasFiltradas = filtrarNotas();

    if (notasFiltradas.length === 0) {
        // No hay notas para mostrar
        const mensajeSinNotas = document.createElement('p');
        mensajeSinNotas.textContent = 'NO HAY NOTAS PARA MOSTRAR';
        contenedorNotas.appendChild(mensajeSinNotas);
    } else {
        // Pintar cada nota
        notasFiltradas.forEach(nota => {
            const tarjetaNota = crearTarjetaNota(nota);
            contenedorNotas.appendChild(tarjetaNota);
        });
    }
}

// Función para crear una tarjeta de nota
function crearTarjetaNota(nota) {
    const divTarjeta = document.createElement('div');
    divTarjeta.classList.add('tarjeta-nota');

    const titulo = document.createElement('h3');
    titulo.textContent = nota.titulo;
    divTarjeta.appendChild(titulo);

    const texto = document.createElement('p');
    texto.textContent = nota.texto;
    divTarjeta.appendChild(texto);

    const checkboxRealizada = document.createElement('input');
    checkboxRealizada.type = 'checkbox';
    checkboxRealizada.checked = nota.realizada;
    checkboxRealizada.addEventListener('change', () => marcarRealizada(nota.id));
    divTarjeta.appendChild(checkboxRealizada);

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Borrar nota';
    botonBorrar.addEventListener('click', () => borrarNota(nota.id));
    divTarjeta.appendChild(botonBorrar);

    return divTarjeta;
}

// Función para agregar una nueva nota
function agregarNota() {
    const titulo = document.getElementById('titulo-nueva-nota').value;
    const texto = document.getElementById('texto-nueva-nota').value;

    if (titulo && texto) {
        const nuevaNota = { id: ++idGlobal, titulo, texto, realizada: false };
        notas.push(nuevaNota);

        limpiarFormulario();
        pintarNotas();
    } else {
        alert('Por favor, completa los campos de título y texto.');
    }
}

// Función para limpiar el formulario de nueva nota
function limpiarFormulario() {
    document.getElementById('titulo-nueva-nota').value = '';
    document.getElementById('texto-nueva-nota').value = '';
}

// Función para borrar una nota
function borrarNota(idNota) {
    notas = notas.filter(nota => nota.id !== idNota);
    pintarNotas();
}

// Función para marcar una nota como realizada o no realizada
function marcarRealizada(idNota) {
    const indiceNota = notas.findIndex(nota => nota.id === idNota);
    notas[indiceNota].realizada = !notas[indiceNota].realizada;
    pintarNotas();
}

// Función para filtrar las notas por texto y estado de realizada
function filtrarNotas() {
    const textoFiltro = document.getElementById('filtro-texto').value.toLowerCase();
    const mostrarRealizadas = document.getElementById('filtro-realizadas').checked;

    return notas.filter(nota => {
        const textoCoincide = nota.titulo.toLowerCase().includes(textoFiltro) || nota.texto.toLowerCase().includes(textoFiltro);
        const estadoCoincide = !mostrarRealizadas || nota.realizada;

        return textoCoincide && estadoCoincide;
    });
}

// Inicializar la aplicación
pintarNotas();

// Agregar eventos de cambio a los inputs de filtro
const inputTextoFiltro = document.getElementById('filtro-texto');
const checkboxRealizadasFiltro = document.getElementById('filtro-realizadas');

inputTextoFiltro.addEventListener('input', () => pintarNotas());

