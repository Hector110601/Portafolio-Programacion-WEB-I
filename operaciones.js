function sumar(){
	var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var res = n1 + n2;
    document.getElementById("resultado").innerHTML = res;
}

function restar(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var res = n1 - n2;
    document.getElementById("resultado").innerHTML = res;
}

function multiplicar(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var res = n1 * n2;
    document.getElementById("resultado").innerHTML = res;
}

function dividir(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var res = n1 / n2;
    document.getElementById("resultado").innerHTML = res;
}