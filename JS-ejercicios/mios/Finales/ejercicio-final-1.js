//Ejercicio Final 1


function palindromo (){

    let palabra=prompt('Escribe una palabra').toLowerCase();
 
	palabra=palabra.replace(/ /g, ''); //espacios en blanco
 
	for (let i=0; i < palabra.length; i++){
		if(palabra[i]!== palabra[palabra.length-i-1]){
            console.log ('No es un palindromo');
			return false;}
        }
        
    
    console.log ('Es un palindromo');
    return true;
}

palindromo();
