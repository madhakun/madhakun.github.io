const loading = () => {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loading');
        loader.className += ' hidden';
    });
};

loading();


const content = () => {
    const thumbs = document.querySelectorAll('.part > section');
    const covid = document.getElementById('covid');
    const gejala = document.getElementById('gejala');
    const cegah = document.getElementById('pencegahan');
    const distance = document.getElementById('distancing')

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            if (thumb.getAttribute('id') == 'covidThumb') {
                covid.classList.toggle('show');
                gejala.classList.remove('show');
                cegah.classList.remove('show');
                distance.classList.remove('show');
            } else if (thumb.getAttribute('id') == 'gejalaThumb') {
                gejala.classList.toggle('show');
                covid.classList.remove('show');
                cegah.classList.remove('show');
                distance.classList.remove('show');
            } else if (thumb.getAttribute('id') == 'cegahThumb') {
                cegah.classList.toggle('show');
                gejala.classList.remove('show');
                covid.classList.remove('show');
                distance.classList.remove('show');
            } else if (thumb.getAttribute('id') == 'distanceThumb') {
                distance.classList.toggle('show');
                gejala.classList.remove('show');
                cegah.classList.remove('show');
                covid.classList.remove('show');
            }
        })
    });

    const closes = document.querySelectorAll('.close');
    
    closes.forEach(close => {
        close.addEventListener('click', () => {
            close.parentElement.classList.remove('show')
        })
    });
}

content();
