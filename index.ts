import './style.css';

import { interval, concat, mapTo, take } from 'rxjs';

const $timer1 = interval(1000).pipe(take(3), mapTo('first timer'));
const $timer2 = interval(500).pipe(take(5), mapTo('second timer'));
const $timer3 = interval(3000).pipe(take(2), mapTo('third timer'));

concat($timer1, $timer2, $timer3).subscribe(console.log);
