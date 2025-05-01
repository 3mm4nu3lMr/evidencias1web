function leer(){
	//Referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value;
	
	//Referencia por ID
	var clave= document.getElementById("pass").value; 
	//Referencia por TagName
	var car= document.getElementsByTagName("select")[0].value;
	//Referencia por Name
	var gen=document.getElementsByName("genero");
	//Declaración de variables/ en JavaScript se puede o no 
	var i,g;
			for (i=0;i<gen.length;i++){
				if (gen[i].checked){
					g=gen[i].value;
				}
			}
	//Referencia por Id
	var term=document.getElementById("privacidad").checked;	
	if (term==true){
		term="Si";
	}else{
		term="No";
	}

	document.getElementById("datos").innerHTML="\<br>Nombre: "+nombre+
	"\<br>Password: "+clave+
	"\<br>Carrera: "+car+
	"\<br>Género: "+g+
	"\<br>Aceptó el acuerdo: "+term;
}