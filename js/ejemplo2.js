var nom, anio, edad, dia;
nom = prompt("Ingrese el Nombre: ");
anio = parseInt(prompt("Añode nacimiento: "));
edad = 2024 - anio;
if(edad>=18){
    document.write(nom + " eres mayor de edad");
}
else{
    document.write(nom + " eres menor de edad")
}
dia = prompt("Ingrese un dia entre 1 y 7: ");
switch(dia){
    case 1: alert("Lunes");break;
    case 2: alert("Martes");break;
    case 3: alert("Miercoles");break;
    case 4: alert("Jueves");break;
    case 5: alert("Viernes");break;
    case 6: alert("Sabado");break;
    case 7: alert("Domingo");break;
    default: alert("fuera de Rango");

}