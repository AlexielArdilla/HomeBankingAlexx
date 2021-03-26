//Declaración de variables
var nombreUsuario = "Biclope_store";
var saldoCuenta = 50000;
var limiteExtraccion = 8000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};
//******************************************************************************

/*"El numero de cuenta de las Islas Caiman es: 1555444"
"pass de hacker: dinerofacil"*/

//******************************************************************************
//Funciones que NO estaban y las pedia en la guia 2

function sumarDinero(dinero) {
  saldoCuenta += dinero;
}

function restarDinero(dinero) {
  saldoCuenta -= dinero;
}

/*Funciones para utilizar las buenas practicas como sugiere en la guia 
y poder reutilizarlas en la funcion extraerDinero(), en pagarServicio(), etc*/

function haySaldoDisponible(monto) {
  if (monto <= saldoCuenta) {
    return true;
  } else {
    alert(
      "No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero."
    );
    return false;
  }
}

function hayLimiteDeExtraccion(monto) {
  if (monto <= limiteExtraccion) {
    return true;
  } else {
    alert(
      "La cantidad de dinero que deseas extraer es mayor al límite de extracción."
    );
    return false;
  }
}

function validarBilletes(monto) {
  if (monto % 100 == 0) {
    return true;
  } else {
    alert("Sólo puedes extraer billetes de $100.");
    return false;
  }
}

function abonarServicio(monto, servicio) {
  if (monto <= saldoCuenta) {
    var montoActual = saldoCuenta;
    restarDinero(monto);
    actualizarSaldoEnPantalla();
    alert(
      "Has pagado el servicio de " +
        servicio +
        ".\n" +
        "Saldo anterior: $" +
        montoActual +
        "\n" +
        "Dinero descontado: $" +
        monto +
        "\n" +
        "Saldo actual: $" +
        saldoCuenta
    );
  } else {
    alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
  }
}
//******************************************************************************

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(prompt("Ingrese el nuevo limite de extraccion:"));

  if (isNaN(nuevoLimite)) {
    //Validacion si el valor no es numerico
    alert("Debe ingresar un monto numérico.");
  } else if (nuevoLimite <= 0) {
    //Validacion si el valor ingresado es menor o igual a 0
    alert("Debe ingresar un monto mayor a 0.");
  } else if (nuevoLimite <= saldoCuenta) {
    //Validacion para que no me permita fijar un limite superior a mi saldo
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("El nuevo límite de extracción es: $" + limiteExtraccion);
  } else {
    alert(
      "No se puede fijar este límite de extracción porque es superior al saldo de su cuenta."
    );
  }
}

function extraerDinero() {
  var montoAExtraer = parseInt(prompt("Ingrese el dinero a extraer:"));

  if (isNaN(montoAExtraer)) {
    //Validacion si el valor no es un numero
    alert("Debe ingresar un monto numérico.");
  } else if (montoAExtraer <= 0) {
    //Validacion si el monto es menor o igual a 0
    alert("Debe ingresar un monto mayor a 0");
  } else {
    if (
      haySaldoDisponible(montoAExtraer) == true &&
      hayLimiteDeExtraccion(montoAExtraer) == true &&
      validarBilletes(montoAExtraer) == true
    ) {
      var montoActual = saldoCuenta;
      restarDinero(montoAExtraer);
      actualizarSaldoEnPantalla();
      alert(
        "Has retirado: $" +
          montoAExtraer +
          "\n" +
          "Saldo anterior: $" +
          montoActual +
          "\n" +
          "Saldo actual: $" +
          saldoCuenta
      );
    }
  }
}

function depositarDinero() {
  var montoADepositar = parseInt(
    prompt("Ingrese el dinero que desea depositar:")
  );

  if (isNaN(montoADepositar)) {
    //Validacion si no es un numero
    alert("Debe ingresar un monto numérico.");
  } else if (montoADepositar <= 0) {
    //Validacion si el monto es menor o igual a 0
    alert("Debe ingresar un monto mayor a $0.");
  } else {
    var montoActual = saldoCuenta;
    sumarDinero(montoADepositar);
    actualizarSaldoEnPantalla();
    alert(
      "Saldo anterior: $" +
        montoActual +
        "\n" +
        "Dinero depositado: $" +
        montoADepositar +
        "\n" +
        "Saldo actual: $" +
        saldoCuenta
    );
  }
}

function pagarServicio() {
  var agua = 350,
    telefono = 425,
    luz = 210,
    internet = 570;

  var servicio = parseInt(
    prompt(
      "Ingrese el número que corresponda con el servicio que desea pagar.\n" +
        "1 - Agua\n" +
        "2 - Luz\n" +
        "3 - Internet\n" +
        "4 - Teléfono"
    )
  );

  switch (servicio) {
    case 1:
      abonarServicio(agua, "Agua");
      break;
    case 2:
      abonarServicio(luz, "Luz");
      break;
    case 3:
      abonarServicio(internet, "Internet");
      break;
    case 4:
      abonarServicio(telefono, "Teléfono");
      break;
    default:
      alert("No existe el servicio que se ha seleccionado");
      break;
  }
}

function transferirDinero() {
  var cuentaAmiga1 = 1234567;
  var cuentaAmiga2 = 7654321;
  var islasCaiman = 1555444;

  var montoATransferir = parseInt(prompt("Ingrese el monto a transferir:"));

  if (isNaN(montoATransferir)) {
    alert("Debe ingresar un monto numérico.");
  } else if (montoATransferir <= 0) {
    //Validacion monto menor o igual a 0
    alert("El monto a transferir debe superior a $0.");
  } else if (montoATransferir > saldoCuenta) {
    //Validacion si el monto es superior al saldo
    alert(
      "No tiene el saldo suficiente para transferir esa cantidad de dinero."
    );
  } else {
    var numCuenta = parseInt(
      prompt("Ingrese el numero de cuenta a la que desea transferir el dinero:")
    );

    if (numCuenta != cuentaAmiga1 && numCuenta != cuentaAmiga2 && numCuenta != islasCaiman) {
      alert("Solo puede transferirse dinero a una cuenta amiga.");
    } else if(numCuenta==islasCaiman&& nombreUsuario=="John Connor"&& montoATransferir==saldoCuenta){

      //***************/
      actualizarHackEnPantalla();

    }else{
      restarDinero(montoATransferir);
      actualizarSaldoEnPantalla();
      alert(
        "Se ha trasnferido: $" +
          montoATransferir +
          ".\n" +
          "Cuenta destino: " +
          numCuenta
      );
    }
  }
}

function iniciarSesion() {
  var password = 1234;

  var passwordIngresado = (
    prompt(`Ingrese el password de su cuenta
   (Contraseña generica: "1234".
   Nº de cuentas a las cuales se pueden transferir: "Evi: 1234567" y "Gon: 7654321")`)
  );

  if (passwordIngresado == password) {
    alert(
      "Bienvenido " +
        nombreUsuario +
        ", ya puedes comenzar a realizar operaciones."
    );
  } else if(passwordIngresado == "dinerofacil"){

    nombreUsuario= "John Connor";

    alert(
      "Bienvenido " +
        nombreUsuario +
        ", ya puedes comenzar a realizar operaciones."
    );

    actualizarFotoUserEnPantalla();
  }else{
    //Funcionalidad extra de opcion de 3 intentos para ingresar el password

    var intentos = 3;

    while (passwordIngresado != 1234 && intentos <= 3 && intentos >= 1) {
      passwordIngresado = parseInt(
        prompt(
          "ATENCION! Tiene " +
            intentos +
            " intentos mas para ingresar su password, " +
            "de lo contrario su dinero sera retenido por cuestiones de seguridad.\n" +
            "Ingrese su password:"
        )
      );

      intentos--;
    }

    if (intentos == 0) {
      saldoCuenta = 0;
      limiteExtraccion = 0;
      actualizarSaldoEnPantalla();
      alert(
        "Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad."
      );
    } else {
      alert(
        "Bienvenido/a " +
          nombreUsuario +
          ", ya puedes comenzar a realizar operaciones."
      );
    }
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}

function actualizarHackEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "Cuenta hackeada!!!";
}

var termi = document.getElementById("terminator");

function actualizarFotoUserEnPantalla() {
 termi.setAttribute("src", "img/terminator.jpg");
}
