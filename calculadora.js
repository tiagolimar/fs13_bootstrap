function soma(event) {
    event.preventDefault();
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    const display = document.getElementById('display')

    const valor1 = parseFloat(num1.value)
    const valor2 = parseFloat(num2.value)

    const valorSomado = valor1 + valor2

    display.innerText = valorSomado
}