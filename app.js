var valortabelas = [16,1,4,8,2]
var numeroPensado = 0
var clicou = 0
var clicou2 = 0
var clicou3= 0
var clicou4= 0
var clicou5= 0
function tabela1Click(){
var nClicadas=1
nClicadas = clicou++ ;
if (nClicadas ==0){
    numeroPensado = numeroPensado + valortabelas[0];
}
}
function tabela2Click(){
    var nClicadas2=1
    nClicadas2 = clicou2++;
    if (nClicadas2 ==0){
        numeroPensado = numeroPensado + valortabelas[1];
    }
}
function tabela3Click(){
    var nClicadas3;
    nClicadas3 = clicou3++;
    if (nClicadas3==0){
        numeroPensado = numeroPensado + valortabelas[2];
    }
}
function tabela4Click(){
    var nClicadas4;
    nClicadas4= clicou4++;
    if (nClicadas4 ==0){
        numeroPensado = numeroPensado + valortabelas[3];
    }
}
function tabela5Click(){
    var nClicadas5;
    nClicadas5 = clicou5++;
    if (nClicadas5 ==0){
        numeroPensado = numeroPensado + valortabelas[4];
    }
 }
function mostra(){
    console.log(numeroPensado)
    numeroPensadoMostra = document.getElementById ("resultado");
    var mensagemResultado = "O número que você pensou é " + numeroPensado;
    numeroPensadoMostra.innerHTML = mensagemResultado;
}