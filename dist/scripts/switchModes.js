

function switchModes() {

    //Navbar variables
    let dropdown = document.querySelector('#dropdown')
    let globe = document.querySelector('#globe')
    let idioma = document.querySelector('#idioma')
    let arrow = document.querySelector('#arrow')
    let glorious = document.querySelector('#glorious')
    let car = document.querySelector('#car')
    let search = document.querySelector('#search')
    


    //Social media variables
    let body = document.querySelector('#body')
    let fb = document.querySelector('#social1')
    let insta = document.querySelector('#social2')
    let tt = document.querySelector('#social3')
    let tik = document.querySelector('#social4')
    let darkLight = document.querySelector('#social5')

    //Ticket area variables
    let txt = document.querySelector('#ticketText')
    let button =  document.querySelector('#buttonTicket')

    //Carousel variables
    let carousel = document.querySelector('#carousel')

    //It makes the background color change between black and white
    if (body.classList.contains('bg-black')) {
        //Light mode
        body.classList.add('bg-white')
        body.classList.remove('bg-black')

        //Navbar light mode
        dropdown.src = './images/icons/light-mode/dropdown.svg'
        globe.src = "images/icons/light-mode/globe.png"
        idioma.classList.add('text-black')
        arrow.src = "images/icons/light-mode/arrow.png"
        arrow.style.width = '12px'
        arrow.style.height = '10px'
        arrow.style.margin = '3px 0 0 3px'
        car.src= "images/icons/light-mode/vector.svg"
        search.src = "images/icons/light-mode/search.svg"
        glorious.classList.add('text-black')
        glorious.classList.remove('text-white')

        //Social Media light mode
        fb.src = "./images/icons/light-mode/social-media/facebook.svg"
        insta.src = "./images/icons/light-mode/social-media/instagram.png"
        tt.src = "./images/icons/light-mode/social-media/twitter-x.png"
        tik.src = "./images/icons/light-mode/social-media/tik-tok.png"
        darkLight.src = "./images/icons/light-mode/social-media/black-and-white.png"

        // Ticket area light mode
        txt.classList.add('text-black')
        txt.classList.remove('text-white')
        button.classList.add('bg-black', 'text-white')
        button.classList.remove('bg-white', 'text-black')

        //Carousel light mode
        carousel.classList.add('text-black')
        carousel.classList.remove('text-white')


    } else if (body.classList.contains('bg-white')){
        //Dark mode
        body.classList.add('bg-black')
        body.classList.remove('bg-white')

        //Navbar dark mode
        dropdown.src = "./images/union.jpeg"
        globe.src = "images/globe.png"
        idioma.classList.remove('text-black')
        arrow.src = "images/expand-arrow.png"
        arrow.style.width = '21px'
        arrow.style.height = '17px'
        arrow.style.margin = '0'
        car.src = "images/vector.png"
        search.src = "images/search.png"
        glorious.classList.add('text-white')
        glorious.classList.remove('text-black')


        //Social media dark mode
        fb.src= "./images/icons/facebook.png"
        insta.src= "./images/icons/instagram.png"
        tt.src= "./images/icons/twitter.png"
        tik.src= "./images/icons/tiktok.png"
        darkLight.src= "./images/icons/black-and-white.png"

        //Ticket area dark mode

        txt.classList.add('text-white')
        txt.classList.remove('text-black')
        button.classList.remove('bg-black', 'text-white')
        button.classList.add('bg-white', 'text-black')

         //Carousel dark mode
         carousel.classList.add('text-white')
         carousel.classList.remove('text-black')
    }
    
}



