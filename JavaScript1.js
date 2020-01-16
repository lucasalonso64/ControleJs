

function handleClick() {
    var kmatual = document.querySelector('[data-js="kmatual"]').value;
    var valorlitro = document.querySelector('[data-js="valorlitro"]').value;
    var consmedio = document.querySelector('[data-js="consmedio"]').value;

//    var qtdli = document.querySelector('[data-js="vlrli"]').value;
//    var vlrli = document.querySelector('[data-js="vlrli"]').value;
//    var vlrto = document.querySelector('[data-js="vlrli"]').value;
//    var kmatual = document.querySelector('[data-js="kmatual"]').value;
//    var kmrod = document.querySelector('[data-js="vlrli"]').value;
//   

    document.querySelector('[data-js="result"]').innerHTML = sum(kmatual, valorlitro, consmedio);
    document.querySelector('[data-js="result1"]').innerHTML = sum1(kmatual, valorlitro, consmedio);
   
}

function sum(kmatual, valorlitro, consmedio) {
    kmatual = + kmatual;
    consmedio / consmedio;
    return kmatual / consmedio;    
}

function sum1(kmatual, valorlitro, consmedio) {
    kmatual = + kmatual;
    consmedio * consmedio;
    return kmatual * consmedio;    
}

function limpar(){
    var kmatual = document.querySelector('[data-js="kmatual"]').value = '';
    var valorlitro = document.querySelector('[data-js="valorlitro"]').value = '';
    var consmedio = document.querySelector('[data-js="consmedio"]').value = '';
   
}



    

