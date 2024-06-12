function password(){
    //Obteniendo datos
    let digito1 = document.querySelector('#digito1').value;
    let digito2 = document.querySelector('#digito2').value;
    let digito3 = document.querySelector('#digito3').value;
    
    let contrasena = digito1 + digito2 + digito3;
    
    if ( contrasena === "911" ){
        document.querySelector('#feedback').innerHTML = "Password 1 correcta";
    } else if ( contrasena === "714" ){
        document.querySelector('#feedback').innerHTML = "Password 2 correcta";
    }
    else{
        document.querySelector('#feedback').innerHTML = "Password incorrecta";
    }

}