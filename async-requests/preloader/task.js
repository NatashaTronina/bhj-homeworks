document.addEventListener('DOMContentLoaded', () => {
    const loaderElement = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    const apiUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

    function createItem(charCode, value) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item'); 

        itemDiv.innerHTML = `
            <div class="item__code">${charCode}</div>
            <div class="item__value">${value}</div>
            <div class="item__currency">руб.</div>
        `;
        return itemDiv;
    }

    async function displayCourses() {
        loaderElement.classList.add('loader_active');
        itemsContainer.innerHTML = ''; 

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data && data.response && data.response.Valute) {
                const valuteData = data.response.Valute;

                for (const charCode in valuteData) {

                    if (Object.hasOwnProperty.call(valuteData, charCode)) {
                        const currencyInfo = valuteData[charCode];
                        
                        const itemElement = createItem(currencyInfo.CharCode, currencyInfo.Value);
                        
                        itemsContainer.appendChild(itemElement);
                    }
                }
            } else {
                itemsContainer.innerHTML = '<p>Не удалось получить корректные данные о курсах.</p>';
            }

        } catch (error) {
            console.error('Ошибка при загрузке курсов валют:', error);
            itemsContainer.innerHTML = '<p>Ошибка загрузки данных. Пожалуйста, попробуйте позже.</p>';
        } finally {
            loaderElement.classList.remove('loader_active');
        }
    }


    displayCourses();
});