import { interval, merge, of } from 'rxjs'
import { delay, take, exhaustMap } from 'rxjs/operators'

const sourceInterval = interval(1000)
const delayedInterval = sourceInterval.pipe(delay(1000), take(4))

const example = merge(
  delayedInterval,
  of(true),
)
.pipe(exhaustMap(() => sourceInterval.pipe(take(5))))

const subscribe = example.subscribe(val => console.log(val))
