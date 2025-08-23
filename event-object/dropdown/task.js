document.addEventListener("DOMContentLoaded", function() {
    const dropContainers = document.querySelectorAll('.dropdown');

    dropContainers.forEach(dropdown => {
        const dropList = dropdown.querySelector('.dropdown__list'); 
        const dropValue = dropdown.querySelector('.dropdown__value');
        const dropLinks = Array.from(dropdown.querySelectorAll('.dropdown__link')); 

        dropValue.addEventListener('click', function() {
            dropList.classList.toggle('dropdown__list_active');
        });

        dropLinks.forEach(elem => {
            elem.addEventListener("click", function(event) {
                event.preventDefault();
                dropValue.textContent = elem.textContent;
                dropList.classList.remove('dropdown__list_active');
            });
        });
    });
});