var carregandobola = document.getElementById('carregando')
var title = document.getElementById('title')
var rules = document.getElementById('rules')
var game = document.getElementById('game-1')
var game2 = document.getElementById('game-2')
document.addEventListener('DOMContentLoaded', carregando)
function carregando(){
    setTimeout(() => {
        game2.style.transition = "2s"
        game2.style.opacity = "100%"
        rules.style.transition = "2s"
        rules.style.opacity = "100%"
        game.style.transition = "2s"
        game.style.opacity = "100%"
        title.style.transition = "2s"
        title.style.opacity = "100%"
        carregandobola.style.transition = "1s"
        carregandobola.style.opacity = "0%"
    }, 2000);
}