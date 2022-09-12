var tabela1El = document.getElementById ('tabela1');
var tabela2El = document.querySelector('#tabela2');
var tabela3El = document.querySelector('#tabela3');
var tabela4El = document.querySelector('#tabela4');
var tabela5El = document.querySelector('#tabela5');
var valortabelas = [16,1,4,8,2]
var numeroPensado = 0
function tabela1click(){
numeroPensado = numeroPensado + 4
}
tabela1El.addEventListener ('click',tabela1click);

console.log (numeroPensado)