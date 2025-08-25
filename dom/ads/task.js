document.addEventListener("DOMContentLoaded", function() {
    const rotatorContainer = document.querySelectorAll('.rotator');

    rotatorContainer.forEach(rotators=> {
        const rotator = Array.from(rotators.querySelectorAll('.rotator__case'));
        let index = 0;

        setInterval(() => {
            rotator[index].classList.remove('rotator__case_active');

            index++;

            if (index >= rotator.length) {
                index = 0;
            }
            rotator[index].classList.add('rotator__case_active');
        }, 1000)
    });
});
