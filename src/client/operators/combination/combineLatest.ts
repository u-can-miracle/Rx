import { timer, combineLatest } from 'rxjs'

const timerOne = timer(1000, 4000)
const timerTwo = timer(2000, 4000)
const timerThree = timer(3000, 4000)

const example = combineLatest(timerOne, timerTwo, timerThree)

const subscribe = example.subscribe(
  // val => console.log('val', val),
  ([timerValOne, timerValTwo, timerValThree])  => console.log(
    `
    Timer One Latest: ${timerValOne},
    Timer Two Latest: ${timerValTwo},
    Timer Three Latest: ${timerValThree},
    `
  ),
  error => console.log('error', error),
  () => console.log('complete'),
)
