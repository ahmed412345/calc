let field = document.getElementById('field');
function num(a){
    field.value += a;
}
function operaD(){
    field.value = field.value.slice(0,-1);
}
function operaDA(){
    field.value = '';
}
let equ = document.getElementById('equals')
let sure = /^[0-9+\-*/.]+$/;
function time(){
    setTimeout(function(){
        field.value = ''
    },500)
}
equ.onclick = function(){
    field.value = field.value.replace('÷','/').replace('×','*')
    if(!sure.test(field.value)){
        field.value = 'please write only number'
        time();
    }else if(eval(field.value) == 'Infinity' || isNaN(eval(field.value))){
        field.value = 'can not diven in zero'
        time();
    }else{
        field.value = eval(field.value);
    }
}
