document.addEventListener('DOMContentLoaded', () => {

    const pollTitleElement = document.getElementById('poll__title');
    const pollAnswersElement = document.getElementById('poll__answers');
    const apiUrl = 'https://students.netoservices.ru/nestjs-backend/poll';

    function createAnswerButton(answerText) {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answerText; 


        button.addEventListener('click', () => {

            alert('Спасибо, ваш голос засчитан!');

            const answerButtons = pollAnswersElement.querySelectorAll('.poll__answer');
            answerButtons.forEach(btn => {
                btn.disabled = true; 
            });
            window.location.reload();

        });
        return button;
    }

    async function fetchPoll() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();


            if (data && data.data && data.data.title && data.data.answers) {
                pollTitleElement.textContent = data.data.title;
                pollAnswersElement.innerHTML = ''; 

                data.data.answers.forEach(answerText => {
                    const answerButton = createAnswerButton(answerText);
                    pollAnswersElement.appendChild(answerButton);
                });
            } 

        } catch (error) {
            console.error('Ошибка при загрузке опроса:', error);
            pollTitleElement.textContent = 'Ошибка загрузки опроса.';
            pollAnswersElement.innerHTML = '<p>Произошла ошибка при загрузке данных.</p>';
        }
    }

    fetchPoll();
});