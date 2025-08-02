
document.getElementById('user-icon').addEventListener('click', function() {
    var menu = document.getElementById('user-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});





const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        // Oculta todos los contenidos y desactiva todos los botones
        tabContents.forEach(content => content.style.display = 'none');
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Muestra el contenido y activa el botón correspondiente
        document.getElementById(tabId).style.display = 'block';
        button.classList.add('active');
    });
}); 


const resultado = document.getElementById('resultado');
let esconderRes;

document.addEventListener("keyup", e => {
    if (e.target.matches("#busc")) {
        if (e.target.value != ""){
            if (esconderRes) {
                clearTimeout(esconderRes);
            }
            resultado.style.display = "block";
            resultado.textContent = "No se encontró resultado para '" + e.target.value + "'";

            esconderRes = setTimeout(() => {resultado.style.display = "none";}, 2000);
        }
        
    }
});
