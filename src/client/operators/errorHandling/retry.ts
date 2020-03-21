import { interval, of, throwError } from 'rxjs'
import { mergeMap, retry } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  mergeMap(val => {
    if (val > 1) {
      return throwError('Error!')
    }

    return of(val)
  }),
  retry(2),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
