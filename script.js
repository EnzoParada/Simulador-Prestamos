
function validarInput( inputId,regex){
  const inputElement = document.getElementById(inputId);

  inputElement.addEventListener('input', function(){
    const valorIngresado = this.value;
    const esValido= regex.test(valorIngresado);

    if(!esValido){
      this.value= valorIngresado.slice(0,-1);
    }

  });
}
validarInput('nombre', /^[a-zA-Z\s]*$/);
validarInput('dni', /^[0-9]*$/);
validarInput('numero', /^[0-9]*$/)