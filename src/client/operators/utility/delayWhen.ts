import { interval, timer } from 'rxjs'
import { delayWhen } from 'rxjs/operators'

const message = interval(1000)
const delayFor5Sec = () => timer(5000)
const example = message.pipe(
  delayWhen(delayFor5Sec),
)

const subscribe = example.subscribe(val => console.log(val))
