function redirigirClientesT() {
    window.location.href = "clientesAgregar.html";
  }
  
function redirigirModulos() {
    window.location.href = "modulos.html";
}

async function cargarInterfaceClientes() {
    let response = await fetch('HTML/InterfaceClientes.html');
    let text = await response.text();
    document.getElementById('contenedor').innerHTML = text;
}

