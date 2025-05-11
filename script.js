function validarInput(inputId, regex, min, max) {
    const inputElement = document.getElementById(inputId);

    inputElement.addEventListener('input', function () {
        let valorIngresado = this.value;

        if (inputId === 'monto' || (min !== undefined && max !== undefined)) {
            this.value = valorIngresado.replace(/[^0-9]/g, '');
            valorIngresado = this.value;

            const numeroIngresado = parseInt(valorIngresado, 10);
            const tieneValor = valorIngresado.length > 0;
            const fueraDeRango = isNaN(numeroIngresado) || (min !== undefined && max !== undefined && (numeroIngresado < min || numeroIngresado > max));

            if (tieneValor && min !== undefined && max !== undefined && fueraDeRango) {
                inputElement.classList.add('input-invalido');
            } else {
                inputElement.classList.remove('input-invalido');
            }
        } else if (inputId === 'edad') {
            this.value = valorIngresado.replace(/[^0-9]/g, '');
            valorIngresado = this.value;

            const edadIngresada = parseInt(valorIngresado, 10);
            if (valorIngresado.length > 0 && (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 99)) {
                inputElement.classList.add('input-invalido');
            } else {
                inputElement.classList.remove('input-invalido');
            }
        } else if (regex) {
            if (!regex.test(valorIngresado)) {
                this.value = valorIngresado.slice(0, -1);
            }
        }
    });
}

validarInput('nombre', /^[a-zA-Z\s]*$/);
validarInput('dni', /^[0-9]*$/);
validarInput('numero', /^[0-9]*$/);
validarInput('edad');
validarInput('monto', undefined, 1000, 1000000);


function mostrarResumen() {
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const numero = document.getElementById('numero').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const monto = document.getElementById('monto').value;
    const opciones = document.getElementById('opciones').value;
    const opcionesTexto = document.getElementById('opciones').options[document.getElementById('opciones').selectedIndex].text;

    document.getElementById('resumen-nombre').textContent = `Nombre: ${nombre}`;
    document.getElementById('resumen-dni').textContent = `DNI: ${dni}`;
    document.getElementById('resumen-numero').textContent = `Numero: ${numero}`;
    document.getElementById('resumen-edad').textContent = `Edad: ${edad}`;
    document.getElementById('resumen-email').textContent = `Email: ${email}`;
    document.getElementById('resumen-monto').textContent = `Monto solicitado: $${monto}`;
    document.getElementById('resumen-opciones').textContent = `Plazo seleccionado: ${opcionesTexto}`;

    document.getElementById('resumen-contenedor').style.display = 'block';
}

