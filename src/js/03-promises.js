// Доступ до форми
const formRef = document.querySelector('.form');
// const btnRef = document.querySelector("button")

formRef.addEventListener('submit', hanlesubmit);
// Функція сабміту форми
function hanlesubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  // console.log(event.currentTarget);
  //  викликає функцію  стільки разів, скільки ввели в поле amount
  const amountEl = amount.value;
  // Під час кожного виклику передай їй номер промісу (position),
  //  що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
  const stepEl = step.value;
  const delayEl = delay.value;

  createPromise(position, delay);

  event.currentTarget.reset();

  for(let i=0; i<amountEl; i+=1) {
    
  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    setTimeout(() => {
      if (isSuccess) {
        Fulfill (`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Reject (`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  }
}


// if (shouldResolve) {
//   // Fulfill
// } else {
//   // Reject
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
