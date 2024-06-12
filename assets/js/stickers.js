function comprar(){
    //Obteniendo datos
    let pokeBall = Number(document.querySelector('#pokeball').value);
    let superBall = Number(document.querySelector('#superball').value);
    let masterBall = Number(document.querySelector('#masterball').value);
    
    let cantidad = pokeBall + superBall + masterBall;
    
    if ( cantidad <= 10 ){
        document.querySelector('#cantidadTotal').innerHTML = "Llevas " + cantidad + " Pokéballs seleccionadas.";
    } else{
        document.querySelector('#cantidadTotal').innerHTML = "¡Demasiado! no puedes seleccionar más de 10 Pokéballs.";
    }
}