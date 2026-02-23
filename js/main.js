let hidden_button = document.getElementById('Logo')
let audio = document.querySelector('audio');


let ubuntu = document.getElementById('ubuntu')
let firefox = document.getElementById('firefox')
let vscodium = document.getElementById('vscodium')
let office = document.getElementById('libreoffice')
let vlc = document.getElementById('vlc')



hidden_button.addEventListener('click', function() {
    audio.play();

})


ubuntu.addEventListener('click', function() {
    window.open('https://ubuntu.com/download/desktop', '_blank')
})


firefox.addEventListener('click', function() {
    window.open('https://www.firefox.com/en-US/', '_blank')
})


vscodium.addEventListener('click', function() {
    window.open('https://vscodium.com/', '_blank')
})


office.addEventListener('click', function() {
    window.open('https://www.libreoffice.org/', '_blank')
})


vlc.addEventListener('click', function() {
    window.open('https://ru.wikipedia.org/wiki/VLC', '_blank')
})
