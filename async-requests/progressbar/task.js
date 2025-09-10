document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('form');   
    const progressElement = document.getElementById('progress');

    const uploadUrl = formElement.action; 

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formElement);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progressElement.value = percentComplete; 

            } 
        });

        xhr.upload.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Файл успешно загружен!');
                progressElement.value = 100; 
                alert('Файл успешно загружен!');
                
            } else {
                console.error('Ошибка при загрузке файла:', xhr.status, xhr.statusText);
                alert(`Ошибка загрузки файла: ${xhr.statusText || xhr.status}`);
                progressElement.value = 0; 
            }
        });

        xhr.addEventListener('error', () => {
            console.error('Сетевая ошибка при загрузке файла.');
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте ваше соединение и попробуйте снова.');
            progressElement.value = 0;
        });

        xhr.open('POST', uploadUrl, true);
        
        xhr.send(formData); 
    });
});