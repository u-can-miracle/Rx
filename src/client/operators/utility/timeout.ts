import { of, timer } from 'rxjs'
import { concatMap, timeout, catchError, delay } from 'rxjs/operators'

const example = timer(5000).pipe(timeout(3000))

const subscribe = example.subscribe(
  val => console.log('val', val),
  err => console.log('err: ', err),
)
