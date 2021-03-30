import updateClockFace from './update-clock-face-fn';

export default class CountdownTimer {
  constructor ({ selector, targetDate }) {
    this.selector = selector;
    this.endTime = targetDate;
    this.startTime = null;
    this.intervalId = null;
    
    this.beginTimer()
  }

  beginTimer () {
    this.intervalId = setInterval( () => {
    this.startTime = Date.now();
    const time = this.endTime - this.startTime;
    updateClockFace (time);
    this.endTimer ()
    }, 1000);
  }

  endTimer () {
    const time1 = this.endTime.getTime()/1000;
    const time2 = Math.round(this.startTime/1000);
    
    if (time1 === time2) {
      clearInterval (this.intervalId);
      updateClockFace (0)
    }
  }
}
