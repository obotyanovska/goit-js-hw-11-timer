import './styles.css';

const refs = {
  valueDays: document.querySelector('.timer [data-value="days"]'),
  valueHours: document.querySelector('.timer [data-value="hours"]'),
  valueMins: document.querySelector('.timer [data-value="mins"]'),
  valueSecs: document.querySelector('.timer [data-value="secs"]'),
};


const timer = {
  intervalId: null,
  endTime: new Date('Mar 30, 2021 14:38:00'),
  startTime: null,
  
  beginTimer () {
    this.intervalId = setInterval( () => {
    this.startTime = Date.now();
    const time = this.endTime - this.startTime;
    this.displayTimer (time);
    this.endTimer ()
    }, 1000);
  },

  endTimer () {
    const time1 = this.endTime.getTime()/1000;
    const time2 = Math.round(this.startTime/1000);
    console.log(time1, time2);
    if (time1 === time2) {
      clearInterval (this.intervalId);
      this.displayTimer (0)
    }
  },

  displayTimer (data) {
    const { days, hours, mins, secs } = dateComponents (data);
    refs.valueDays.textContent = days;
    refs.valueHours.textContent = hours;
    refs.valueMins.textContent = mins;
    refs.valueSecs.textContent = secs;
  }
}
timer.beginTimer();


// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

function dateComponents (time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  
  return { days, hours, mins, secs };
}
