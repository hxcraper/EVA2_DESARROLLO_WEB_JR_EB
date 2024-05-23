function guardarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const mensaje = document.getElementById("mensaje").value;

    const datos = {
        Nombre: nombre,
        CorreoElectronico: correo,
        Telefono: telefono,
        Dirección: direccion,
        Mensaje: mensaje
    };

    alert("Mensaje enviado, lo contactaremos a la brevedad.");
}
