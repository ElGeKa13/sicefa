async function cargarInicio() {
    let response = await fetch('HTML/inicio.html');
    let text = await response.text();
    document.getElementById('contenedor').innerHTML = text;
}

async function cargarLogin() {
    let response = await fetch('HTML/login2.html');
    let text = await response.text();
    document.getElementById('contenedor').innerHTML = text;
}

async function cargarSicefa() {
    var user = document.getElementById("usuario").value;
    
    alert(user);
    
    if (user == "Rafael1303"){
        window.location.href = "modulos.html";
    }else if(user == "Jaqui1234"){
        window.location.href = "modulosCentral.html";
    }else{
        alert("Usuario o contraseña incorrecta");
    }
}