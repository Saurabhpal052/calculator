var expression='';
var result='';
function addElement(a){
    expression+=a;
    document.getElementById('input').innerHTML=expression;
}
function calculate(){
    result=eval(expression);
    document.getElementById('output').innerHTML=result;
}
function CLear(){
    expression='';
    document.getElementById('input').innerHTML='';
    document.getElementById('output').innerHTML='';
}
function backspace(){
    expression=expression.substring(0,expression.length-2);
    document.getElementById('input').innerHTML=expression;
}

function percent(a){
    return a/100;
}