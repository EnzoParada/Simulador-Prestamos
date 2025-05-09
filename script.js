
function validarInput( inputId,regex){
  const inputElement = document.getElementById(inputId);

  inputElement.addEventListener('input', function(){
    let valorIngresado = this.value;

    if (inputId === 'monto') {
      this.value = valorIngresado.replace(/[^0-9]/g, '');
      valorIngresado = this.value; 

      const numeroIngresado = parseInt(valorIngresado, 10);
      if (valorIngresado.length > 0 && (isNaN(numeroIngresado) || numeroIngresado < 1000 || numeroIngresado > 1000000)) {
        
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
validarInput('monto');