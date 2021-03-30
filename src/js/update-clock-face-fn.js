const refs = {
  valueDays: document.querySelector('#timer-1 [data-value="days"]'),
  valueHours: document.querySelector('#timer-1 [data-value="hours"]'),
  valueMins: document.querySelector('#timer-1 [data-value="mins"]'),
  valueSecs: document.querySelector('#timer-1 [data-value="secs"]'),
};

export default function updateClockFace (data) {
  const { days, hours, mins, secs } = getDateComponents (data);
  refs.valueDays.textContent = days;
  refs.valueHours.textContent = hours;
  refs.valueMins.textContent = mins;
  refs.valueSecs.textContent = secs;
}

function getDateComponents (time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  
  return { days, hours, mins, secs };
}