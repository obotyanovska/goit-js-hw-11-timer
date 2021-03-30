import './styles.css';
import CountdownTimer from './js/countdown-timer-cl';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});


