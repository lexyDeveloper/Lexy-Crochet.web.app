const params = new URLSearchParams(window.location.search);
const registerParam = params.get('register');


let isRegistering = registerParam !== 'false';

window.onload = () => {
    toggleForm(); // aplicar el estado inicial
};

function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const registerFields = document.getElementById('register-fields');
    const loginFields = document.getElementById('login-fields');
    const submitBtn = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-form');

    if (isRegistering == true) {
        formTitle.textContent = 'Iniciar Sesión';
        registerFields.style.display = 'none';
        loginFields.style.display = 'block';
        submitBtn.textContent = 'Iniciar Sesión';
        toggleText.innerHTML = '¿No tienes cuenta? <a href="/paginas/log_reg/login_regis.html?register=false" onclick="toggleForm()">Registrarse</a>';
    } else {
        formTitle.textContent = 'Registrarse';
        registerFields.style.display = 'block';
        loginFields.style.display = 'none';
        submitBtn.textContent = 'Registrarse';
        toggleText.innerHTML = '¿Ya tienes cuenta? <a href="/paginas/log_reg/login_regis.html?register=true" onclick="toggleForm()">Iniciar sesión</a>';
    }

    isRegistering = !isRegistering;
}

function llamarGoogle(){
    console.log("callese wey")
}