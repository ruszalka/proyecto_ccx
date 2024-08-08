// script.js

function cambiarPagina(paginaNumero) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.style.display = 'none');
    
    const paginaActual = document.getElementById(`pagina-${paginaNumero}`);
    if (paginaActual) {
        paginaActual.style.display = 'block';
    }
}

// Mostrar la primera página al cargar
document.addEventListener('DOMContentLoaded', () => {
    cambiarPagina(1);
});