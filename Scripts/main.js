function getData() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    console.log('Nombre:', nombre);
    console.log('Email:', email);
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            getData();
            alert('Datos enviados. Revisa la consola.');
        });
    }
});