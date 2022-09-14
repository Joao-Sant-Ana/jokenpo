var pontopc = document.getElementById('ponto-computador')
var ponto = document.getElementById('ponto-jogador')
var res = document.getElementById('res')
var resp = document.getElementById('resp')
ptpc = 0
ptplayer = 0
var lagarto = document.getElementById('lagarto')
lagarto.addEventListener("click", clicou)
var spock = document.getElementById('spock')
spock.addEventListener("click", clicou)
var tesoura = document.getElementById('tesoura')
tesoura.addEventListener("click", clicou)
var pedra = document.getElementById('pedra')
pedra.addEventListener("click", clicou)
var papel = document.getElementById('papel')
papel.addEventListener("click", clicou)
var jokenpo = document.getElementById('jokenpo')
var figuras = [
    "img/jokenpo.webp",
    "img/papel.png",
    "img/pedra.png",
    "img/tesoura.png",
    "img/lagarto.png",
    "img/spock.png"
]

//this

function clicou() {
    var jogada = 0
    var n = Math.round(Math.random()*5)
    console.log(n)
    jokenpo.src = figuras[n]

    if(this.id == "papel"){jogada = 1}
    if(this.id == "pedra"){jogada = 2}
    if(this.id == "tesoura"){jogada = 3}
    if(this.id == "lagarto"){jogada = 4}
    if(this.id == "spock"){jogada = 5}

    //Empatou
    if(jogada == n) {
        alert("Empate")
    } /*Ganhou*/else if(n == 1 && jogada == 3 || n == 2 && jogada == 1 || n == 3 && jogada == 2){
        alert("ganhou")
        ponto.innerHTML = `Jogador - ${++ptplayer}`
        jogada = 0
    } /*perdeu*/else {
        alert("Perdeu")
        pontopc.innerHTML = `Computador - ${++ptpc}`
    }
    if(ptplayer == 10){
        papel.style.display = "none"
        jokenpo.style.display = "none"
        pedra.style.display = "none"
        tesoura.style.display = "none"
        res.style.display = "block"
        resp.innerHTML = "Voce ganhou!"
    } else if(ptpc == 10) {
        papel.style.display = "none"
        jokenpo.style.display = "none"
        pedra.style.display = "none"
        tesoura.style.display = "none"
        res.style.display = "block"
        resp.innerHTML = "Voce perdeu!"
    }
}