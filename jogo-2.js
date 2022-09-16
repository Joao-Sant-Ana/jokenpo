var pontojogador2 = document.getElementById('ponto-computador')
var pontojogador1 = document.getElementById('ponto-jogador')
var res = document.getElementById('res')
var resp = document.getElementById('resp')
var lagarto1 = document.getElementById('lagarto1')
var pedra1 = document.getElementById('pedra1')
var spock1 = document.getElementById('spock1')
var papel1 = document.getElementById('papel1')
var tesoura1 = document.getElementById('tesoura1')
var jokenpo1 = document.getElementById('jokenpo1')
var jokenpo2 = document.getElementById('jokenpo2')
var lagarto2 = document.getElementById('lagarto2')
var pedra2 = document.getElementById('pedra2')
var spock2 = document.getElementById('spock2')
var papel2 = document.getElementById('papel2')
var tesoura2 = document.getElementById('tesoura2')
var btn = document.getElementById('btn')
btn.addEventListener('click', clicou)

tesoura1.addEventListener("click", clicou1)
papel1.addEventListener("click", clicou1)
lagarto1.addEventListener("click", clicou1)
spock1.addEventListener("click", clicou1)
pedra1.addEventListener("click", clicou1)

tesoura2.addEventListener("click", clicou2)
papel2.addEventListener("click", clicou2)
lagarto2.addEventListener("click", clicou2)
spock2.addEventListener("click", clicou2)
pedra2.addEventListener("click", clicou2)


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
function clicou1() {
    jogada1 = 0
    if(vjogada == 0){
        if(this.id == "papel1"){jogada1 = 1}
        if(this.id == "pedra1"){jogada1 = 2}
        if(this.id == "tesoura1"){jogada1 = 3}
        if(this.id == "lagarto1"){jogada1 = 4}
        if(this.id == "spock1"){jogada1 = 5}

        papel1.style.display = "none"
        pedra1.style.display = "none"
        tesoura1.style.display = "none"
        lagarto1.style.display = "none"
        spock1.style.display = "none"

        jokenpo1.style.display = "block"
    }
    vjogada++
}

function clicou2() {
    jogada2 = 0
    if (vjogada == 1) {
        if(this.id == "papel2"){jogada2 = 1}
        if(this.id == "pedra2"){jogada2 = 2}
        if(this.id == "tesoura2"){jogada2 = 3}
        if(this.id == "lagarto2"){jogada2 = 4}
        if(this.id == "spock2"){jogada2 = 5}
        papel2.style.display = "none"
        pedra2.style.display = "none"
        tesoura2.style.display = "none"
        lagarto2.style.display = "none"
        spock2.style.display = "none"

        jokenpo2.style.display = "block"
        
        vjogada--
    }
}



function clicou() {
    console.log(jogada1, jogada2)
    if(jokenpo1.style.display == "block" && jokenpo2.style.display == "block") {
        if(jogada1 == jogada2){
            alert("empate")
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        } else if(jogada1 == 1 && (jogada2 == 2 || jogada2 == 5)) {
            pontojogador1.innerHTML = `Jogador 1 - ${++ptj1}`
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        } else if(jogada1 == 2 && (jogada2 == 3 || jogada2 == 4)){
            pontojogador1.innerHTML = `Jogador 1 - ${++ptj1}`
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        } else if(jogada1 == 3 && (jogada2 == 1 || jogada2 == 4)){
            pontojogador1.innerHTML = `Jogador 1 - ${++ptj1}`
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        } else if(jogada1 == 4 && (jogada2 == 1 || jogada2 == 5)){
            pontojogador1.innerHTML = `Jogador 1 - ${++ptj1}`
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        } else if(jogada1 == 5 && (jogada2 == 2 || jogada2 == 3)){
            pontojogador1.innerHTML = `Jogador 1 - ${++ptj1}`
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        } else {
            pontojogador2.innerHTML = `Jogador 1 - ${++ptj2}`
            jokenpo1.src = figuras[jogada1]
            jokenpo2.src = figuras[jogada2]
            setTimeout(() => {
                papel1.style.display = "block"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                jokenpo1.style.display = "none"
    
                papel2.style.display = "block"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                jokenpo2.style.display = "none"
                jokenpo1.src = figuras[0]
                jokenpo2.src = figuras[0]
            }, 5000);
        }
    }
    
    if (ptj1 == 10 || ptj2 == 10) {
        papel1.style.display = "none"
        jokenpo1.style.display = "none"
        pedra1.style.display = "none"
        tesoura1.style.display = "none"
        lagarto1.style.display = "none"
        spock1.style.display = "none"
        papel2.style.display = "none"
        jokenpo2.style.display = "none"
        pedra2.style.display = "none"
        tesoura2.style.display = "none"
        lagarto2.style.display = "none"
        spock2.style.display = "none"
        res.style.zIndex = "100"
        res.style.transition = "1s"
        res.style.opacity = "100%"
        if(ptj1 == 10) {
            resp.innerHTML = "Jogador 1 ganhou!"
        } else {
            resp.innerHTML = "Jogador 2 ganhou!"
        }
        document.addEventListener("keydown", function(event){
            var tecla = event.keyCode
            if(tecla == 13) {
                ptj1 = 0
                ptj2 = 0
                papel1.style.display = "block"
                jokenpo1.style.display = "none"
                pedra1.style.display = "block"
                tesoura1.style.display = "block"
                lagarto1.style.display = "block"
                spock1.style.display = "block"
                papel2.style.display = "block"
                jokenpo2.style.display = "none"
                pedra2.style.display = "block"
                tesoura2.style.display = "block"
                lagarto2.style.display = "block"
                spock2.style.display = "block"
                res.style.zIndex = "0"
                res.style.opacity = "0%"
                pontojogador1.innerHTML = `Jogador - ${ptj1}`
                pontojogador2.innerHTML = `Computador - ${ptj2}`
            }
        })
    }
}