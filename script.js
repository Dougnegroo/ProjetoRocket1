function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    // pegar a tag img e substituir a img

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png', 'alt', 'foto do mayk de oculos')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
    
}