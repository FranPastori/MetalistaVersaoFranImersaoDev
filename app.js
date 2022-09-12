
var valortabelas = [16,1,4,8,2]
var numeroPensado = 0
function tabela1Click(){
numeroPensado = numeroPensado + valortabelas[0]
}
function tabela2Click(){
    numeroPensado = numeroPensado + valortabelas[1]
}
function tabela3Click(){
    numeroPensado = numeroPensado + valortabelas[2]
}
function tabela4Click(){
    numeroPensado = numeroPensado + valortabelas[3]
}
function tabela5Click(){
numeroPensado = numeroPensado + valortabelas[4]
 }
function mostra(){
    console.log(numeroPensado)
    numeroPensadoMostra = document.getElementById ("resultado");
    var mensagemResultado = "O número que você pensou é " + numeroPensado;
    numeroPensadoMostra.innerHTML = mensagemResultado;
}