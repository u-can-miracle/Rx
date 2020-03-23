import { interval, fromEvent } from 'rxjs'
import {
  switchMapTo,
  scan,
  startWith,
  takeWhile,
  finalize,
  delay,
  tap,
} from 'rxjs/operators'

const click = fromEvent(document, 'click')
const example = interval(1000).pipe(
  tap(() => console.log(123)),
  delay(2000),
  switchMapTo(click),
)

const subscribe = example.subscribe(val => console.log(val))
