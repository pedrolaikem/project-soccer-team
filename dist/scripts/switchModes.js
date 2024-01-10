function switchModes() {
    let body = document.querySelector('#body')
    if (body.classList.contains('bg-black')) {
        body.classList.add('bg-white')
        body.classList.remove('bg-black')
    } else {
        body.classList.add('bg-black')
        body.classList.remove('bg-white')
    }
}



