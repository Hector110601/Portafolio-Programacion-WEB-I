function calcularTotal() {
    let selects = document.querySelectorAll("select");
    let total = document.getElementById("total");
    let precioTotal = 0;
    let resumenPedido = document.getElementById("resumenPedido");

    resumenPedido.innerHTML = ""; // Limpia el resumen antes de agregar datos

    selects.forEach(select => {
        if (select.selectedIndex !== -1) {
            let opcionSeleccionada = select.options[select.selectedIndex];
            let precio = parseFloat(opcionSeleccionada.value) || 0;
            precioTotal += precio;

            resumenPedido.innerHTML += `<p>${opcionSeleccionada.textContent}</p>`;
        }
    });

    total.textContent = "Total a pagar: $" + precioTotal.toLocaleString("es-MX") + " MXN";

    verificarFormularioCompleto();
}

function verificarFormularioCompleto() {
    let inputs = document.querySelectorAll("input[required]");
    let resumenSection = document.getElementById("resumen");

    let todosCompletos = Array.from(inputs).every(input => input.value.trim() !== "");

    resumenSection.style.display = todosCompletos ? "block" : "none";
}

function enviarFormulario() {
    if (!validarFormularioCompleto()) {
        return false;
    }
    
    generarTicket();
    
    alert("✅ Compra confirmada. Revisa tu ticket abajo.");
    
}

function validarFormularioCompleto() {
    // Validar campos requeridos
    let inputsRequeridos = document.querySelectorAll("input[required]");
    let todosCompletos = Array.from(inputsRequeridos).every(input => input.value.trim() !== "");
    
    // Validar términos
    let terminosAceptados = document.getElementById('terminos').checked;
    
    // Validar productos
    let selects = document.querySelectorAll("select");
    let productosSeleccionados = Array.from(selects).some(select => select.selectedIndex > 0);
    
    if (!todosCompletos) {
        alert("⚠️ Completa todos los campos obligatorios");
        return false;
    }
    
    if (!terminosAceptados) {
        alert("❗ Debes aceptar los términos y condiciones");
        return false;
    }
    
    if (!productosSeleccionados) {
        alert("🛒 Selecciona al menos un producto");
        return false;
    }
    
    return true;
}

function generarTicket() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    
    // Encabezado
    doc.setFontSize(20);
    doc.setTextColor(255, 140, 0);
    doc.text(105, 20, 'TuTiendaVirtual', { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text(105, 30, 'Ticket de compra', { align: 'center' });
    
    // Datos del cliente
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(20, 45, `Cliente: ${document.getElementById('user').value}`);
    doc.text(20, 55, `Email: ${document.getElementById('correo').value}`);
    doc.text(20, 65, `Teléfono: ${document.getElementById('telefono').value}`);
    
    // Productos
    doc.setFontSize(14);
    doc.setTextColor(255, 140, 0);
    doc.text(20, 80, 'Productos:');
    
    let y = 90;
    let total = 0;
    document.querySelectorAll("select").forEach(select => {
        if (select.selectedIndex > 0) {
            let producto = select.options[select.selectedIndex].text.split(" - ")[0];
            let precio = parseFloat(select.options[select.selectedIndex].value);
            total += precio;
            
            doc.setFontSize(10);
            doc.text(25, y, `• ${producto}`);
            doc.text(180, y, `$${precio.toLocaleString('es-MX')}`, { align: 'right' });
            y += 7;
        }
    });
    
    // Total
    doc.setFontSize(14);
    doc.setTextColor(255, 140, 0);
    doc.text(20, y + 15, 'Total:');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(180, y + 15, `$${total.toLocaleString('es-MX')} MXN`, { align: 'right' });
    
    // Mostrar PDF
    const pdfUrl = URL.createObjectURL(doc.output('blob'));
    document.getElementById('ticket-pdf').src = pdfUrl;
    document.getElementById('ticket-container').style.display = 'block';
    document.getElementById('ticket-container').scrollIntoView({ behavior: 'smooth' });
}