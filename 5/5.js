let firstInput = document.querySelector(`#input1`);
let secondInput = document.querySelector(`#input2`);
let btn = document.querySelector(`.btn`);
let result = document.querySelector(`.result`);
 
btn.addEventListener(`click`, function(e){
    e.preventDefault();
    if (((firstInput.value < 1) || (firstInput.value > 10)) && ((secondInput.value < 1) || (secondInput.value > 10))) {
        result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
    } else if ((1 <= firstInput.value <= 10) && ((secondInput.value < 1) || (secondInput.value > 10))) {
        result.innerHTML = "Лимит вне диапазона от 1 до 10";
    } else if ((1 <= secondInput.value <= 10) && ((firstInput.value < 1) || (firstInput.value > 10))) {
        result.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${firstInput.value}&_limit=${secondInput.value}`)
        .then(response => {
            //console.log(response)
            return response.json()})
        .then(data => {
            //console.log(data) 
            result.innerHTML = ``
            let imgArray = []
            data.forEach(element => {
                imgArray.push(`<img src="${element.url}">`)
            }); 
             
            imgArray.forEach(elem => {
                let image = localStorage.getItem('image')
                localStorage.setItem('image', elem)
                result.innerHTML += image
            })
            
            /* 
            data.forEach(element => {
                result.innerHTML += `<img src ="${element.url}">`
            });
            */
        })
        .catch(error => {result.innerHTML = error})
    }
})
 