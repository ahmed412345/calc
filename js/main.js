let field = document.getElementById('field');
function one(a){
    field.value += a;
}
let num1 =0;
let num2 =0;
let ask =0;
function opera(b){
    num1 = field.value;
    field.value = '';
    ask = b;
}
function equal(){
    num2 = field.value;
    if(ask == '+'){
        field.value = Number(num1) + Number(num2);
    }else if(ask == '-'){
        field.value = Number(num1) - Number(num2);
    }else if(ask == '*'){
        field.value = Number(num1) * Number(num2);
    }else if(ask == '/'){
        if(num2 == 0){
            alert('can not divide in zero');
        }else{
            field.value = Number(num1) / Number(num2);
        }
    }
}
function operaD(){
    field.value = field.value.slice(0,-1);
}
function operaDA(){
    field.value = '';
}
