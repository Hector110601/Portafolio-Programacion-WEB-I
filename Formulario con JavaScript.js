function leer(){
	//Referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value;

	//Referencia por ID
	var clave=document.getElementById("pass").value;

	//Referencia por TagName
	var carr=document.getElementsByTagName("select")[0].value;
	
	//Referencia por Name
	var gen=document.getElementsByName("genero");

	var i,g;
	for (i = 0; i < gen.length; i++){
		if(gen[i].checked){
			g=gen[i].value;
		}
	}

	//Referencia por Id
	var tyc=document.getElementById("privacidad").checked;

	document.getElementById("Datos").innerHTML=
	"\<br>Nombre: "+nombre+
	"\<br><br>Password: "+clave+
	"\<br><br>Carrera: "+carr+
	"\<br><br>Tu género es: "+g+
	"\<br><br>Aceptó el acuerdo: "+tyc;
}
