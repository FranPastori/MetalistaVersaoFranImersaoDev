var valortabelas = [16,1,4,8,2]
var numeroPensado = 0
var clicou = 0
function tabela1Click(){
var nClicadas;
nClicadas= clicou+1;
if (nClicadas <=1){
    numeroPensado = numeroPensado + valortabelas[0];
}
}
function tabela2Click(){
var clicou2 = 1
if (clicou2<=1){
numeroPensado = numeroPensado + valortabelas[1]
    }
}
function tabela3Click(){
    var clicou3 = 1
    if (clicou3<=1){
        numeroPensado = numeroPensado + valortabelas[2]
    }
}
function tabela4Click(){
    var clicou4 = 1
if (clicou4<=1){
    numeroPensado = numeroPensado + valortabelas[3]
}
}
function tabela5Click(){
    var clicou5= 1
    if (clicou5<=1){
        numeroPensado = numeroPensado + valortabelas[4]
    }
 }
function mostra(){
    console.log(numeroPensado)
    numeroPensadoMostra = document.getElementById ("resultado");
    var mensagemResultado = "O número que você pensou é " + numeroPensado;
    numeroPensadoMostra.innerHTML = mensagemResultado;
}