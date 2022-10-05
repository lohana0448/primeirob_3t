let tabuada = 2;
function escreva(){
    document.write("Tabuada do " + tabuada + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*10) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*12) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*14) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*16) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*18) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*20) + "<br>");
}

let tabuada = 3;
function escreva(){
    document.write("Tabuada do " + tabuada + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*12) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*15) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*18) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*21) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*24) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*27) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*30) + "<br>");
}

let lista = ["Jesus, Spessato, Gilmar, Neuza, Duarte"];

function mostrarlista (){
    document.write("Tamanho Da Lista"+ lista.length + "<br");
    for(let i = 0; i < lista.length; i++){
        document.write ("Professor:"+ lista(5) + "<br" );     
}
}


function multiplica(){
    for(let i = 1; i <= 10; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <=10; j++){
            document.write(i+" x " + j + " = "+(i*j)+"<br>");
        }
    }
}





