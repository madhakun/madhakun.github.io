const navSlide = () => {
    const navToggler = document.querySelector('.nav-toggler');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');

    
    navToggler.addEventListener('click', () => {
        // Toggle Navbar
        nav.classList.toggle('nav-active');

        // Animate Link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index/7+ 0.3) + 's';
            }
        });
        
        // Navbar Toggle
        navToggler.classList.toggle('toggler');
    })
}
navSlide();

const themeMode = () => {
    const themeToggler = document.querySelector('.mode');
    const mode = document.querySelector('.modeToggle')
    const nav = document.querySelector('nav')
    const content = document.querySelector('div.content')
    const footer = document.querySelector('footer')

    themeToggler.addEventListener('click', () => {
        mode.classList.toggle('modeActive')

        if (document.body.classList) {
            document.body.classList.toggle('night')
            nav.classList.toggle('night')
            content.classList.toggle('night')
            footer.classList.toggle('night')
        } else {
            document.body.classList.remove('night')
            nav.classList.remove('night')
            content.classList.remove('night')
            footer.classList.remove('night')
        }
    })
}

themeMode()
