import 'babel-polyfill'

import { Observable, fromEvent, from, interval } from 'rxjs'
import {
  take,
  mergeMap,
  switchMap,
  flatMap,
  map,
  tap,
  retry,
  retryWhen,
  delay,
  combineAll,
} from 'rxjs/operators'
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

console.clear()

const TIMER_NAME = 'TIMER_NAME'
console.time(TIMER_NAME)

const source$ = interval(1000).pipe(
  map(i => {
    // console.timeLog(TIMER_NAME, i)

    return i
  }),
  take(2),
)

const example$ = source$.pipe(
  map(val => {
    // console.timeLog(TIMER_NAME, 'val', val)

    return interval(1000).pipe(
      map(i => {
        // console.timeLog(TIMER_NAME, val, i)
        return `Result (${val}): ${i}`
      }),
      take(5)
    )
  }),
)

example$
  .pipe(combineAll())
  .subscribe(
    console.log,
    () => {},
    // () => console.timeEnd(TIMER_NAME),
  )
