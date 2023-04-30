let choose = 0;

const main = document.querySelector('.main');
const rating = document.querySelector('#rating-numbers');
const submit = document.querySelector('#submit');
const thankYouImg = document.querySelector('#thank-you-img');
const youSelected = document.querySelector('#you-selected');



rating.addEventListener('click', function(e){
    e.target.style.background = 'gray';
    choose = e.target.innerText;
    console.log(choose);
});

submit.addEventListener('click', function (e){
    youSelected.textContent = "You selected " + choose + " out of 5";
    thankYouImg.appendChild(youSelected);
});


