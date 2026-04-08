
// Seleccionamos el botón y el cuerpo del documento
const btnTheme = document.getElementById('btn-theme');
const body = document.body;

// Requisito: Evento dinámico en index.html
btnTheme.addEventListener('click', function() {
    // Alternamos la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    // Cambiamos el texto del botón según el estado
    if (body.classList.contains('dark-mode')) {
        btnTheme.textContent = 'Modo Claro ☀️';
    } else {
        btnTheme.textContent = 'Modo Oscuro 🌙';
    }
});