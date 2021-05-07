formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //previene a que se recargue la página
    var registro = new Registro(null,formulario.nombre.value,formulario.codigo.value);
        registro.agregar();
        formulario.nombre.value ='';
        formulario.codigo.value ='';
        $('#ventananuevo').modal('hide');
});