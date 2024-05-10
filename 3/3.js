let input = document.querySelector(`#input`);
let btn = document.querySelector(`#btn`);
let result = document.querySelector(`.result`);

 
btn.addEventListener('click', function () {
    
    if (input.value > 1 && input.value < 10) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${input.value}`, true);
        xhr.onload = () => {
            let arrayObjects = JSON.parse(xhr.response);
            arrayObjects.forEach(element => {
                result.innerHTML += `<img src="${element.url}">`
            });
            console.log(JSON.parse(xhr.response))
        };
        xhr.onerror = () => {
            result.innerHTML = `Упс! Ошибка!`
        }
        xhr.send()
    }
    
    if (input.value > 10 || input.value < 1) {
        result.innerHTML = `число вне диапазона от 1 до 10`; 
        setTimeout(() => {
            result.innerHTML = ``;
            input.value = ``
        }, 2800)
    }  
});