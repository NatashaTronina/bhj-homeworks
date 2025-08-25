document.addEventListener("DOMContentLoaded", () => {
    const revealElem = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', function() {
        revealElem.forEach(elem => {
            const reveal = elem.getBoundingClientRect();
            console.log()
            if (reveal.top <= window.innerHeight && reveal.bottom >= 0 ){
                elem.classList.add('reveal_active')
            } else{
                elem.classList.remove('reveal_active')
            }
        });
    });
});