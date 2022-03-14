// Easy Step

// let counter = document.querySelector('.counter');

// let count = 1;

// setInterval(() => {
//     if(count < 75){
//         count++;
//         counter.innerHTML = count;
//     }
// }, 1000);

let counters = document.querySelectorAll('.counter');
let time = 1000;

counters.forEach(counter => {
    let updateCount = () =>{
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        let increment = target / time;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        }else{
            counter.innerText = target;
        }
    };
    updateCount();
});

let healthCondition = document.querySelector('.health');

setTimeout(() => {
    healthCondition.innerText = "You are FIT!";
    healthCondition.style.color = "red";
}, 1000);