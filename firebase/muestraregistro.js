function muestraRegistros(doc){
    var registro = new Registro(doc.id,doc.data().nombre,doc.data().codigo);

    let li = document.createElement("li");
    //atributo que permite abrir la ventada del id
    li.setAttribute("id", registro.id);

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.value = registro.nombre;
    nombre.className = "nombre form-control";

    let codigo = document.createElement("input");
    codigo.type = "text";
    codigo.value = registro.codigo;
    codigo.className = "codigo form-control";

    let borrar = document.createElement("button");
    borrar.className = "btn btn-danger m-3";
    borrar.textContent = "Borrar ";

    let editar = document.createElement("button");
    editar.className = "btn btn-success m-3";
    editar.textContent = "Editar ";
    //atributos que me permiten abrir sus respectivas ventanas
    editar.setAttribute("data-toggle", "modal");
    editar.setAttribute("data-target", "#ventanaeditar");

    li.appendChild(borrar);
    li.appendChild(editar);
    li.appendChild(nombre);
    li.appendChild(codigo);
    productoslista.appendChild(li);

    borrar.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");             
        registro.borrar(id);
    });

    //al dar click en editar nos vamos a traer el id
    editar.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");   
        registro.editar(id);
    });

}