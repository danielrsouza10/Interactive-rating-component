let choose = 0;

const main = document.querySelector('.main');
const rating = document.querySelector('#rating-numbers');
const submit = document.querySelector('#submit');


rating.addEventListener('click', function(e){
    e.target.style.background = 'gray';
    choose = e.target.innerText;
    console.log(choose);
});

submit.addEventListener('click', function (e){
    main.classList.remove('active');
});


