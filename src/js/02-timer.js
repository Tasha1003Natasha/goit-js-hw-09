import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


let selectedTime = null;
let timerId= null;

// Доступ до інпута 
const inputRef = document.querySelector("input");


// Доступу до кнопки старт Start
const btnStart = document.querySelector(`button[data-start]`);
btnStart.setAttribute('disabled', true);

// Доступ до годинника { days, hours, minutes, seconds };
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

// Фукція для передачі
function getTime({ days, hours, minutes, seconds }) {
   daysRef.textContent = days;
   hoursRef.textContent = hours;
   minutesRef.textContent = minutes;
   secondsRef. textContent = seconds;
}


// Слухач на Start
btnStart.addEventListener('click', hanlerClick);

// Функція запуску таймера
function hanlerClick() {
  btnStart.setAttribute('disabled', true);
  inputRef.setAttribute('disabled', true);

  timerId = setInterval(() => {
  let delta = selectedTime - Date.now();
    data = convertMs(delta)
   getTime(data)
      // Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.
      if (delta <= 1000) {
        clearInterval(timerId);
      }
    }, 1000);
  }


flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0];
    // Отримуємо час який є зараз
    let now = new Date().getTime();
    // дата яку вибрав користувач
    let dateByUser = new Date(selectedDates).getTime();
   
 // / відстань між теперішнім і датою зворотного відліку
 let ms = dateByUser - now;

    // Умова запуску таймера
    if (dateByUser <= now) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled', false);
    }
  },
});



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

//Функція addLeadingZero(value), яка використовує метод padStart() 
// і перед рендерингом інтефрейсу форматує значення.
 function addLeadingZero(value) {
   return String(value).padStart(2, `0`);
}

