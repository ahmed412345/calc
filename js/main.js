let field = document.getElementById('field');
function one(a) {
    field.value += a;
}
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multyply = document.getElementById('multyply');
let divide = document.getElementById('divide');
let equals = document.getElementById('equals');
let del = document.getElementById('del');
let delA = document.getElementById('delA');
function plusFun() {
    const num1 = Number(field.value);
    field.value = '';
    window.equalsFun = function() {
        const num2 = Number(field.value);
        field.value = num1 + num2;
    }
}
function minusFun() {
    const num1 = Number(field.value);
    field.value = '';
    window.equalsFun = function() {
        const num2 = Number(field.value);
        field.value = num1 - num2;
    }
}
function multyplyFun() {
    const num1 = Number(field.value);
    field.value = '';
    window.equalsFun = function() {
        const num2 = Number(field.value);
        field.value = num1 * num2;
    }
}
function divideFun() {
    const num1 = Number(field.value);
    field.value = '';
    window.equalsFun = function() {
        const num2 = Number(field.value);
        field.value = num1 / num2;
    }
}
function delFun(){
    field.value = field.value.slice(0, -1);
}
function delAFun(){
    field.value = '';
}
