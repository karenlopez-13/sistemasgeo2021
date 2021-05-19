const formaingresar = document.getElementById("formaingresar");
formaingresar.addEventListener('submit', (e) =>{
    e.preventDefault();
    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(cred =>{
        console.log("Entro (y)");
        $('#ingresarmodal').modal('hide');
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML='';
    }).catch(err =>{
        console.log(err);
        formaingresar.querySelector('.error').innerHTML=messageError(err.code);
    });
});

function messageError(codigo){
    let message = '';
    switch(codigo){
        case 'auth/wrong-password':
            message = "Contraseña Incorrecta";
            break;
        case 'auth/user-not-found':
            message = "Usuario no encontrado";
            break;
        case 'auth/weak-password':
            message = "Contraeña muy débil :(";
            break;
        default:
            message = codigo;
    }
    return message;
}

const salir = document.getElementById("salir");
salir.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then( ()=>{
        alert('Se ha cerrado sesión');
    });
});