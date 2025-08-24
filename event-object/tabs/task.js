document.addEventListener("DOMContentLoaded", function() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(tab => {
        const tabs = tab.querySelectorAll('.tab');
        const tabsContent = tab.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                tabs.forEach((tab) => tab.classList.remove('tab_active'));
                tabsContent.forEach((content) => content.classList.remove('tab__content_active'));
                tab.classList.add('tab_active');
                tabsContent[index].classList.add('tab__content_active');
            });
        });
    });
});
