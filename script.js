
let random = Math.floor(Math.random()*10+1);

let intentos = 5;

console.log("Random es: "+random);

window.alert("Hola: Adivina el numero oculto entre 1 y 10");

while(intentos>0){

    window.alert("Te quedan: "+intentos+" intentos.");

    let ingreso = window.prompt("ingresa el numero");

    if(ingreso==random){

        window.alert("Lo lograste!!!");
        
        intentos = 0;

        break;
    
    }else if(ingreso<random){

        window.alert("El numero es mayor a: "+ ingreso);
    
        intentos--;
    
    }else{

        window.alert("El numero es menor a: "+ ingreso);
    
        intentos--;
    }
   
    let result = confirm("quieres abandonar");

    if(result){

        break;
    }

}

alert("Game over");