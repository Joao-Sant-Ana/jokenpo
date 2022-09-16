var pontopc = document.getElementById('ponto-computador')
var ponto = document.getElementById('ponto-jogador')
var res = document.getElementById('res')
var resp = document.getElementById('resp')
var lagarto = document.getElementById('lagarto')
var pedra = document.getElementById('pedra')
var spock = document.getElementById('spock')
var papel = document.getElementById('papel')
var jokenpo1 = document.getElementById('jokenpo1')
var jokenpo2 = document.getElementById('jokenpo2')
var tesoura = document.getElementById('tesoura')
var lagarto2 = document.getElementById('lagarto2')
var pedra2 = document.getElementById('pedra2')
var spock2 = document.getElementById('spock2')
var papel2 = document.getElementById('papel2')
var tesoura2 = document.getElementById('tesoura2')


tesoura.addEventListener("click", clicou)
papel.addEventListener("click", clicou)
lagarto.addEventListener("click", clicou)
spock.addEventListener("click", clicou)
pedra.addEventListener("click", clicou)

var figuras = [
    "img/jokenpo.png",
    "img/papel.png",
    "img/pedra.png",
    "img/tesoura.png",
    "img/lagarto.png",
    "img/spock.png"
]

ptj1 = 0
ptj2 = 0
vjogada = 0


function clicou() {
    jogada1 = 0
    jogada2 = 0
    if(vjogada == 0){
        
        if(this.id == "papel"){jogada1 = 1}
        if(this.id == "pedra"){jogada1 = 2}
        if(this.id == "tesoura"){jogada1 = 3}
        if(this.id == "lagarto"){jogada1 = 4}
        if(this.id == "spock"){jogada1 = 5}

        papel.style.display = "none"
        pedra.style.display = "none"
        tesoura.style.display = "none"
        lagarto.style.display = "none"
        spock.style.display = "none"

        jokenpo1.style.display = "block"

        vjogada++
    } 
    console.log(vjogada)
    if (vjogada == 1) {
        if(this.id == "papel"){jogada2 = 1}
        if(this.id == "pedra"){jogada2 = 2}
        if(this.id == "tesoura"){jogada2 = 3}
        if(this.id == "lagarto"){jogada2 = 4}
        if(this.id == "spock"){jogada2 = 5}
        papel2.style.display = "none"
        pedra2.style.display = "none"
        tesoura2.style.display = "none"
        lagarto2.style.display = "none"
        spock2.style.display = "none"

        jokenpo2.style.display = "block"
        
        vjogada--
    }
}