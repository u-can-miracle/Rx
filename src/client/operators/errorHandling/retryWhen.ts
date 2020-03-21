import { timer, interval } from 'rxjs'
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  map(val => {
    if (val > 1) {
      throw val
    }

    return val
  }),
  retryWhen(errors =>
    errors.pipe(
      // log
      tap(val => console.log(`Value: ${val} was to hight`)),
      delayWhen(val => timer(val * 1000))
    )
  )
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
