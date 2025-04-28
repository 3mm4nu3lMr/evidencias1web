function sumar(){
	var n1=document.getElementById("num1").value; /*Declaración de variable tomando el valor del cuadro de texto*/
	var n2=document.getElementById("num2").value;
	var res= parseFloat(n1)+parseFloat(n2); //conversión para sumar los valores, ya que si no se pone parseInt/parseFloat, ya que si no se coloca se concatena
	document.getElementById("resultado").innerHTML=res; //Resultado mostrado en el id del párrafo con .innerHTML
}

function restar(){
	var n1=document.getElementById("num1").value; 
	var n2=document.getElementById("num2").value;
	var res= parseFloat(n1)-parseFloat(n2); 
	document.getElementById("resultado").innerHTML=res;
}

function multiplicar(){
	var n1=document.getElementById("num1").value; 
	var n2=document.getElementById("num2").value;
	var res= parseFloat(n1)*parseFloat(n2); 
	document.getElementById("resultado").innerHTML=res;
}
function dividir(){
	var n1=document.getElementById("num1").value; 
	var n2=document.getElementById("num2").value;
	var res= parseFloat(n1)/parseFloat(n2); 
	document.getElementById("resultado").innerHTML=res;

}