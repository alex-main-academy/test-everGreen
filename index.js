document.querySelector('#money').onclick = calc;

function calc() {
    let input1 = document.querySelector('#input1').value;
    let input2 = document.querySelector('#input2').value;
    let input3 = document.querySelector('#input3').value;

    let result = input1 * input2 / input3;
    result = result.toFixed(2)
    document.getElementById('result').innerHTML = result;
}
