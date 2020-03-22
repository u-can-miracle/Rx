import { of, interval } from 'rxjs'
import { concatMapTo, delay, take, tap } from 'rxjs/operators'

const sampleInterval = interval(500)
  .pipe(
    tap(val => console.log('val', val)),
    take(5),
  )
const fakeRequest = of('Network request  completed')
  .pipe(delay(3000))
const example = sampleInterval.pipe(concatMapTo(fakeRequest))

const subscribe = example.subscribe(val => console.log(val))
