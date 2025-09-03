document.addEventListener("DOMContentLoaded", function() {
    const tooltipTriggers = document.querySelectorAll('.has-tooltip');


    let tooltipElement = document.querySelector('.tooltip');
    if (!tooltipElement) {
        tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        document.body.appendChild(tooltipElement); 
    }

    let activeTooltipTrigger = null;

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 

            const tooltipText = this.title; 

            if (activeTooltipTrigger === this) {
                tooltipElement.classList.remove('tooltip_active');
                activeTooltipTrigger = null;
                return;
            }


            tooltipElement.textContent = tooltipText;

            const position = this.getBoundingClientRect();

            tooltipElement.style.top = `${position.bottom + 10}px`;
            tooltipElement.style.left = `${position.left}px`;


            tooltipElement.classList.add('tooltip_active');
            

            activeTooltipTrigger = this;
        });
    });
});