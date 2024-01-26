function openMenu() {
    let drop = document.querySelector('#dropdown')
    let menu = document.querySelector('#menu')
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        drop.src = './images/rightArrow.svg'
    } else {
        menu.classList.add('hidden')
        drop.src = './images/union.jpeg'
    }
}