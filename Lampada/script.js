const lampada = document.getElementById('lampada')
const btnAlternar = document.getElementById('btn-alternar')
const baseUrlImg = 'https://super-duper-guacamole-wrj6wprgqj6539vrx-5501.app.github.dev/Lampada/'

// alert(lampada.src)
// alert(btnAlternar.textContent)
btnAlternar.addEventListener('click', function () {
    if (lampada.src == baseUrlImg + 'lampada1.png') {
        lampada.src = 'lampada2.png'
        btnAlternar.textContent = "Lâmpada Acesa!"
        btnAlternar.style.backgroundColor = 'green'
    }
    else {
        lampada.src = 'lampada1.png'
        btnAlternar.textContent = "Lâmpada Apagada!"
        btnAlternar.style.backgroundColor = 'yellow'

    }
})

btnAlternar.addEventListener('dblclick', function () {
    lampada.src = 'lampada0.png'
    btnAlternar.textContent = 'Lâmpada Queimada!'
    btnAlternar.style.backgroundColor = 'red'
})
