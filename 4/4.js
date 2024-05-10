let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let btn = document.querySelector('#btn');
let result = document.querySelector('.result'); 

btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    if((input1.value < 100 || input1.value > 300) || (input2.value < 100 || input2.value > 300)) {
        result.innerHTML = `Одно из чисел вне диапазона от 100 до 300`;
        setTimeout(() => {result.innerHTML = ``}, 3333)
    } else {
        fetch(`https://dummyimage.com/${input1.value}x${input2.value}`)
        .then((response) => { return response })
        .then((data) => { result.innerHTML = `<img src="${data.url}">` })
        .catch((error) => { result.innerHTML = error });
    }
})