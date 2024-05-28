var button = document.querySelector('button')
var result = document.getElementById('result')
button.addEventListener('click', (e) =>{
    e.preventDefault();
    var first = document.getElementById('num1').value
    var last = document.getElementById('num2').value
    var tong = parseInt(first)+ parseInt(last)
    result.innerHTML = tong
})
