var sucursales = [];
 

function crearSucursales() {
    
    let sucursal1= {
        "idSucursal": 1,
        "nombre": "Sucursal Central",
        "titular": "Leonardo Aguilera Lopez",
        "rfcTitular": "LOAL010912H12",
        "domicilio": "Neurfar 102",
        "codigoPostal": "37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "47777777777",
        "longitud": "aaaa",
        "latitud": "nnn"
    };
    
    let sucursal2 = {
        "idSucursal": 1,
        "nombre": "Sucursal Central",
        "titular": "Leonardo Aguilera Lopez",
        "rfc titular": "LOAL010912H12",
        "domicilio": "Neurfar 102",
        "codigoPostal": "37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "47777777777",
        "longitud": "aaaa",
        "latitud": "nnn"
    };
    
    let sucursal3 = {
        "idSucursal": 1,
        "nombre": "Sucursal Central",
        "titular": "Leonardo Aguilera Lopez",
        "rfc titular": "LOAL010912H12",
        "domicilio": "Neurfar 102",
        "codigoPostal": "37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "47777777777",
        "longitud": "aaaa",
        "latitud": "nnn"
    };
    
    let sucursal4 = {
        "idSucursal": 1,
        "nombre": "Sucursal Central",
        "titular": "Leonardo Aguilera Lopez",
        "rfc titular": "LOAL010912H12",
        "domicilio": "Neurfar 102",
        "codigoPostal": "37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "47777777777",
        "longitud": "aaaa",
        "latitud": "nnn"
    };
    
    let sucursal5 = {
        "idSucursal": 1,
        "nombre": "Sucursal Central",
        "titular": "Leonardo Aguilera Lopez",
        "rfc titular": "LOAL010912H12",
        "domicilio": "Neurfar 102",
        "codigoPostal": "37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "47777777777",
        "longitud": "aaaa",
        "latitud": "nnn"
    };

    sucursales[0] = sucursal1;
    sucursales[1] = sucursal2;
    sucursales[2] = sucursal3;
    sucursales[3] = sucursal4;
    sucursales[4] = sucursal5;

    cargarTablaSucursal();
};

function cargarTablaSucursral() {
    let datosTabla = "";
    for (let i = 0; i < sucursales.length; i++) {
        let datosC = sucursales[i].nombre +
                " " + sucursales[i].titular +
                " " + sucursales[i].rfcTitular;
        let contacto = sucursales[i].domicilio +
                " " + sucursales[i].codigoPostal +
                " " + sucursales[i].ciudad +
                " " + sucursales[i].estado +
                " " + sucursales[i].telefono;
        let activo = "";
        if (sucursales[i].activo == 1) {
            activo = "Activo";
        } else {
            activo = "Inactivo";
        }

        datosTabla += "<tr>";
        datosTabla += "<td>" + activo + "</td>";
        datosTabla += "<td>" + datosC + "</td>";
        datosTabla += "<td>" + contacto + "</td>";
        datosTabla += "<td><button type='button' class='btn btn-danger ms-2 me-2' onclick='eliminarEmp(" + i + ");'> <i class='fa-solid fa-trash-can'></i></button> </td>";
        datosTabla += "<td><button type='button' class='btn btn-warning ms-2 me-2' onclick='modificarEmp(" + i + ");'> <i class='fa-solid fa-down-left-and-up-right-to-center'></i> </button> </td>";
        datosTabla += "</tr>";
    }
    document.getElementById("tbSucursales").innerHTML = datosTabla;
}

function buscarSucursal() {
    //Tomamos el valor de la busqueda
    var b = document.getElementById("txtBusquedaSur").value;
    // Arreglo para colocar los indices de donde se encontraron datos
    var incidencias = [];

    for (var i = 0; i < sucursales.length; i++) {
        if (sucursales[i].idSucursal == b || sucursales[i].nombre == b
                || sucursales[i].nombreTitular == b || sucursales[i].rfcTitular== b
                || sucursales[i].genero == b || sucursales[i].persona.rfcTitular == b 
                || sucursales[i].domicilio == b || surcusales[i].codigoPostal == b
                || sucursales[i].ciudad == b || sucursales[i].estado == b
                || clientes[i].telefono == b
                )
        {
            //Se toma el tamaño del arreglo de incidencias
            var pos = incidencias.length;
            //En esa posicion se agrega el indice del arreglo de Empleados donde se encuentra el valor
            incidencias[pos] = i;
        }

    }
    let datosTabla = "";

    //Si hay datos que coinciden en la busqueda se genera la tabla de resultados
    if (incidencias.length > 0) {
        for (let i = 0; i < incidencias.length; i++) {
            let nombreC = clientes[incidencias[i]].persona.nombre +
                    " " + clientes[incidencias[i]].persona.apellidoPaterno +
                    " " + clientes[incidencias[i]].persona.apellidoMaterno;
            let datosP = clientes[incidencias[i]].persona.genero +
                    " " + clientes[incidencias[i]].persona.fechaNacimiento +
                    " " + clientes[incidencias[i]].persona.rfc +
                    " " + clientes[incidencias[i]].persona.curp;
            let contacto = clientes[incidencias[i]].persona.domicilio +
                    " " + clientes[incidencias[i]].persona.codigoPostal +
                    " " + clientes[incidencias[i]].persona.ciudad +
                    " " + clientes[incidencias[i]].persona.estado +
                    " " + clientes[incidencias[i]].persona.telefono;
            let activo = "";
            if (clientes[incidencias[i]].activo == 1) {
                activo = "Activo";
            } else {
                activo = "Inactivo";
            }

            datosTabla += "<tr>";
            datosTabla += "<td>" + clientes[incidencias[i]].idCliente + "</td>";
            datosTabla += "<td>" + clientes[incidencias[i]].fechaRegistro + "</td>";
            datosTabla += "<td>" + clientes[incidencias[i]].correo + "</td>";
            datosTabla += "<td>" + activo + "</td>";
            datosTabla += "<td>" + nombreC + "</td>";
            datosTabla += "<td>" + datosP + "</td>";
            datosTabla += "<td>" + contacto + "</td>";
            datosTabla += "<td>" + clientes[incidencias[i]].persona.foto + "</td>";
            datosTabla += "<td><button type='button' class='btn btn-danger ms-2 me-2' onclick='eliminarEmp(" + incidencias[i] + ");'> <i class='fa-solid fa-trash-can'></i></button> </td>";
            datosTabla += "<td><button type='button' class='btn btn-warning ms-2 me-2' onclick='modificarEmp(" + incidencias[i] + ");'> <i class='fa-solid fa-down-left-and-up-right-to-center'></i> </button> </td>";
            datosTabla += "</tr>";
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias de la busqueda</td></tr>";
    }
    document.getElementById("tbClientes").innerHTML = datosTabla;
}

function buscarClientesId()
{
    let pos;
    let id = parseInt(document.getElementById("txtIdClientes").value);

    for (let i = 0; i < clientes.length; i++) {
        if (id == clientes[i].idEmpleado) {
            pos = i;
        }
    }
    eliminarEmp(pos);
}

function eliminarCli(i)
{
    clientes.splice(i, 1);
    cargarTablaCliente();
    limpiarEmp();
}

function modificarCli(i) {
    //DATOS DE PERSONA    
    document.getElementById("txtIdEmpleado").value = clientes[i].idCliente;
    document.getElementById("txtIdPersona").value = clientes[i].persona.idPersona;
    document.getElementById("txtNombre").value = clientes[i].persona.nombre;
    document.getElementById("txtApellidoPaterno").value = clientes[i].persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = clientes[i].persona.apellidoMaterno;
    document.getElementById("txtFechaNacimiento").value = clientes[i].persona.fechaNacimiento;
    document.getElementById("txtRfc").value = clientes[i].persona.rfc;
    document.getElementById("txtCurp").value = clientes[i].persona.curp;
    document.getElementById("txtDomicilio").value = clientes[i].persona.domicilio;
    document.getElementById("txtCp").value = clientes[i].persona.codigoPostal;
    document.getElementById("txtCiudad").value = clientes[i].persona.ciudad;
    document.getElementById("txtEstado").value = clientes[i].persona.estado;
    document.getElementById("txtTelefono").value = clientes[i].persona.telefono;
    //DATOS DE EMPLEADO
    document.getElementById("txtFechaIngreso").value = clientes[i].fechaRegistro;
    document.getElementById("txtEstatus").value = clientes[i].persona.activo;
}

function limpiarCli() {
    //DATOS DE PERSONA    
    document.getElementById("txtIdCliente").value = "";
    document.getElementById("txtIdPersona").value = "";
    document.getElementById("txtIdUsuario").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellidoPaterno").value = "";
    document.getElementById("txtApellidoMaterno").value = "";
    document.getElementById("txtFechaNacimiento").value = "";
    document.getElementById("txtRfc").value = "";
    document.getElementById("txtCurp").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtCp").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtTelefono").value = "";
    //DATOS DE EMPLEADO
    document.getElementById("txtFechaRegistro").value = "";
    document.getElementById("txtEstatus").value = "";
}

function guardarCli()
{

    let idE = parseInt(document.getElementById("txtIdCliente").value);
    let idP = parseInt(document.getElementById("txtIdPersona").value);
    let nom = document.getElementById("txtNombre").value;
    let app = document.getElementById("txtApellidoPaterno").value;
    let apm = document.getElementById("txtApellidoMaterno").value;
    let fn = document.getElementById("txtFechaNacimiento").value;
    let rfc = document.getElementById("txtRfc").value;
    let curp = document.getElementById("txtCurp").value;
    let dom = document.getElementById("txtDomicilio").value;
    let cp = document.getElementById("txtCp").value;
    let ciu = document.getElementById("txtCiudad").value;
    let edo = document.getElementById("txtEstado").value;
    let tel = document.getElementById("txtTelefono").value;
    let gen = document.getElementById("cmbGenero").value;
    let foto = "";
    //document.getElementById("cmbGenero").value;
    //DATOS DE EMPLEADO
    let fr = document.getElementById("txtFechaRegistro").value;
    let correo = document.getElementById("txtCorreo").value;
    let est = document.getElementById("txtEstatus").value;

    let persona1 = {
        "idPersona": idP,
        "nombre": nom,
        "apellidoPaterno": app,
        "apellidoMaterno": apm,
        "genero": gen,
        "fechaNacimiento": fn,
        "rfc": rfc,
        "curp": curp,
        "domicilio": dom,
        "codigoPostal": cp,
        "ciudad": ciu,
        "estado": edo,
        "telefono": tel,
        "foto": foto
    };

    let empleado1 = {
        "idEmpleado": idE,
        "fechaIngreso": fr,
        "puesto": correo,
        "activo": est,
        "persona": persona1
    };
    
    alert(idE);

    //modificar 
    if (idE != 0)
    {
        let pos;
        for (let i = 0; i < clientes.length; i++) {
            if (idE == clientes[i].idCliente) {
                pos = i;
            }
        }
        alert(pos);
        clientes[pos] = empleado1;
    }
    //es nuevo generar ids
    else {
        let id = (clientes.length) + 1;
        empleado1.idCliente = id;
        empleado1.persona.idPersona = id;
        let pos = clientes.length;
        clientes[pos] = empleado1;
    }

    cargarTablaCliente();

}

let inputFile = null;

 function leerFoto()
{    
    inputFile = document.getElementById("inputFileImagen");    
    inputFile.onchange = function(evt){cargarFotografia(inputFile);};    
}

function cargarFotografia(objetoInputFile)
{
    //Revisamos que el usuario haya seleccionado un archivo:
    if (objetoInputFile.files && objetoInputFile.files[0]) 
    {
        let reader = new FileReader();
        //Agregamos un oyente al lector del archivo para que,
        //en cuanto el usuario cargue una imagen, esta se lea
        //y se convierta de forma automatica en una cadena de Base64:
        reader.onload = function (e) 
        {
            let fotoB64 = e.target.result;
            document.getElementById("imgFoto").src = fotoB64; 
            document.getElementById("txtaCodigoImagen").value = fotoB64;
//            document.getElementById("txtaCodigoImagen").value = 
//                    fotoB64.substring(fotoB64.indexOf(",") + 1,
//            fotoB64.length);
        };
        //Leemos el archivo que selecciono el usuario y lo
        //convertimos en una cadena con la Base64:
        reader.readAsDataURL(objetoInputFile.files[0]);            
    }
}