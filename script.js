var pontopc = document.getElementById('ponto-computador')
var ponto = document.getElementById('ponto-jogador')
var res = document.getElementById('res')
var resp = document.getElementById('resp')
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
    "img/jokenpo.png",
    "img/papel.png",
    "img/pedra.png",
    "img/tesoura.png",
    "img/lagarto.png",
    "img/spock.png"
]

ptpc = 0
ptplayer = 0

function clicou() {
    var jogada = 0
    var n = Math.ceil(Math.random()*5)
    jokenpo.src = figuras[n]

    if(this.id == "papel"){jogada = 1}
    if(this.id == "pedra"){jogada = 2}
    if(this.id == "tesoura"){jogada = 3}
    if(this.id == "lagarto"){jogada = 4}
    if(this.id == "spock"){jogada = 5}

    //Ganhou
    if(jogada == 1 && (n == 2 || n == 5)) {
        ponto.innerHTML = `Jogador - ${++ptplayer}`
    } else if(jogada == 2 && (n == 3 || n == 4)) {
        ponto.innerHTML = `Jogador - ${++ptplayer}`
    } else if(jogada == 3 && (n == 1 || n == 4)) {
        ponto.innerHTML = `Jogador - ${++ptplayer}`
    } else if(jogada == 4 && (n == 1 || n == 5)) {
        ponto.innerHTML = `Jogador - ${++ptplayer}`
    } else if(jogada == 5 && (n == 2 || n == 3)) {
        ponto.innerHTML = `Jogador - ${++ptplayer}`
    } else if(jogada == n) {}
    //Perdeu
    else {
        pontopc.innerHTML = `Computador - ${++ptpc}`
    }
    if(ptplayer == 10){
        papel.style.display = "none"
        jokenpo.style.display = "none"
        pedra.style.display = "none"
        tesoura.style.display = "none"
        lagarto.style.display = "none"
        spock.style.display = "none"
        res.style.zIndex = "100"
        res.style.transition = "1s"
        res.style.opacity = "100%"
        resp.innerHTML = "Voce ganhou!"
        document.addEventListener("keydown",function(event){
            var tecla = event.keyCode
            if(tecla == 13){
                jokenpo.src = figuras[0]
                ptplayer = 0
                ptpc = 0
                papel.style.display = "block"
                jokenpo.style.display = "block"
                pedra.style.display = "block"
                tesoura.style.display = "block"
                lagarto.style.display = "block"
                spock.style.display = "block"
                res.style.zIndex = "0"
                res.style.opacity = "0%"
                ponto.innerHTML = `Jogador - ${ptplayer}`
                pontopc.innerHTML = `Computador - ${ptpc}`
            }
        })
    } else if(ptpc == 10) {
        papel.style.display = "none"
        jokenpo.style.display = "none"
        pedra.style.display = "none"
        tesoura.style.display = "none"
        lagarto.style.display = "none"
        spock.style.display = "none"
        res.style.zIndex = "100"
        res.style.transition = "1s"
        res.style.opacity = "100%"
        resp.innerHTML = "Voce perdeu!"
        document.addEventListener("keydown",function(event){
            var tecla = event.keyCode
            if(tecla == 13){
                jokenpo.src = figuras[0]
                ptplayer = 0
                ptpc = 0
                papel.style.display = "block"
                jokenpo.style.display = "block"
                pedra.style.display = "block"
                tesoura.style.display = "block"
                lagarto.style.display = "block"
                spock.style.display = "block"
                res.style.zIndex = "0"
                res.style.opacity = "0%"
                ponto.innerHTML = `Jogador - ${ptplayer}`
                pontopc.innerHTML = `Computador - ${ptpc}`
            }
        })
    }
}