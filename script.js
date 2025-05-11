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
validarInput('monto', undefined, 1000, 1000000);
validarInput('edad');