import Notiflix from 'notiflix';

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
  let amountEl = Number(amount.value);
  // 1.Delay step (ms) крок
  let stepEl = Number(step.value);
  // First delay (ms) затримка
  let delayEl = Number(delay.value);

  event.currentTarget.reset();

  // Цикл
  for (
    let position = 1, delay=delayEl;
    position <= amountEl;
    position += 1, delay += stepEl
  ) {
    setTimeout(() => {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, delay);
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
