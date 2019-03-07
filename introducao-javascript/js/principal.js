var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;
var tdImc = paciente.querySelector(".info-imc");

if(peso <= 0 || peso > 1000){
    console.log("Peso Invalido");
    pesoValido = false;
    tdImc.textContent = "Peso Invalido";
}
if(altura <= 0 || altura > 3.00){
    console.log("Altura invalida!");
    alturaValida = false;
    tdImc.textContent = "Altura invalida";
}

if(alturaValida && pesoValido){
    var imc = peso / (altura*altura);   
    tdImc = imc; 
}
