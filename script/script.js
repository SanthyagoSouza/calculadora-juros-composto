


function calculoJuros() {

    let p = document.getElementById('value').value
    let r = document.getElementById('fee').value / 100
    let t = document.getElementById('time').value

    var n = 1

 
    let m = p * Math.pow(1 + r / n, n * t)

    console.log(m.toFixed(2))


    document.getElementById('total').innerHTML = ("RS " + m.toFixed(2).replace('.',','))


}
