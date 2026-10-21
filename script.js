function buscarMedicamiento() {
    // 1. Obtener el texto que escribió el usuario y pasarlo a minúsculas
    let input = document.getElementById('buscador').value.toLowerCase();
    
    // 2. Obtener todas las tarjetas de productos
    let tarjetas = document.getElementsByClassName('tarjeta-producto');

    // 3. Recorrer cada tarjeta para ver si coincide con la búsqueda
    for (let i = 0; i < tarjetas.length; i++) {
        // Leemos los síntomas guardados en el atributo 'data-sintoma'
        let sintomasAsociados = tarjetas[i].getAttribute('data-sintoma') || "";
        let nombreMedicamiento = tarjetas[i].getElementsByTagName('h3')[0].innerText.toLowerCase();

        // Si el texto coincide con el nombre o los síntomas, se muestra. Si no, se oculta.
        if (nombreMedicamiento.includes(input) || sintomasAsociados.includes(input)) {
            tarjetas[i].style.display = "block";
        } else {
            tarjetas[i].style.display = "none";
        }
    }
}

