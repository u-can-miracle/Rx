import { of, timer, interval } from 'rxjs'
import { concatMap, timeoutWith, catchError, delay } from 'rxjs/operators'

const example = timer(5000).pipe(timeoutWith(3000, of(1000)))

const subscribe = example.subscribe(
  val => console.log('val', val),
  err => console.log('err: ', err),
)
