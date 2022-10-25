const mainContainer = document.querySelector('.container1');
const thankYou = document.querySelector('.container2');
const rates = document.querySelectorAll('.btn');
const submit = document.querySelector('.submit');
const submitAgain = document.querySelector('.submitAgain');
const result = document.getElementById('result');


submit.addEventListener('click', () => {
    thankYou.classList.remove('hidden')
    mainContainer.style.display = 'none'
})


submitAgain.addEventListener('click', () => {
    thankYou.classList.add('hidden')
    mainContainer.style.display = 'flex'
})


rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        result.innerHTML = rate.innerHTML
    })
})

