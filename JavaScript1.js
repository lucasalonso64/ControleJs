

function handleClick() {
    var kmatual = document.querySelector('[data-js="kmatual"]').value;
    var valorlitro = document.querySelector('[data-js="valorlitro"]').value;
    var consmedio = document.querySelector('[data-js="consmedio"]').value;

    document.querySelector('[data-js="result"]').innerHTML = sum(kmatual, valorlitro,consmedio);
    document.querySelector('[data-js="result1"]').innerHTML = sum1(kmatual, valorlitro, consmedio);
   
}

function sum(kmatual, valorlitro, consmedio) {
 
    perc = kmatual / consmedio     
    return perc;    
      
}

function sum1(kmatual, valorlitro, consmedio) {
    res =  perc * valorlitro
    return res;

}

function limpar(){
    var kmatual = document.querySelector('[data-js="kmatual"]').value = '';
    var valorlitro = document.querySelector('[data-js="valorlitro"]').value = '';
    var consmedio = document.querySelector('[data-js="consmedio"]').value = '';
   
}



    

