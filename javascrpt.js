function Sum() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    /*var isactive=Boolean(1);
    n1.toString();*/

    var sum = n1 + n2;
    document.getElementById('result').innerHTML = sum;
}
var isactive = Boolean(1);
console.log(isactive);