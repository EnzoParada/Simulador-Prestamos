const inputTexto = document.getElementById('nombre');

inputTexto.addEventListener('input', function() {
  const textoIngresado = this.value;
  const soloTexto = /^[a-zA-Z\s]*$/.test(textoIngresado);

  if (!soloTexto) {
    this.value = textoIngresado.slice(0, -1);
  }
});

const inputNum = document.getElementById("dni");

inputNum.addEventListener('input', function(){
    const numIngresado = this.value;
    const soloNum = /^[0-9]*$/.test(numIngresado);

    if(!soloNum){
        this.value= numIngresado.slice(0, -1);
    }
});

const inputDni= document.getElementById('numero');

inputDni.addEventListener('input', function(){
    const dniIngresado= this.value;
    const soloDni = /^[0-9]*$/.test(dniIngresado);

    if(!soloDni){
        this.value = dniIngresado.slice(0, -1);
    }
});