function calcularTotal() {
    // Obtener las horas y tipo de vehículo
    let horas = document.getElementById("horas").value;
    let vehiculo = document.getElementById("vehiculo").value;

    // Verificar si los campos están completos
    if (horas && vehiculo) {
        // Convertir a números
        horas = parseFloat(horas);
        vehiculo = parseFloat(vehiculo);

        // Calcular el total
        let total = horas * vehiculo;

        // Mostrar el total
        document.getElementById("total").textContent = `Total a pagar: $${total.toFixed(2)} MXN`;
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
