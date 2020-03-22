import { interval } from 'rxjs'
import { throttle } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(throttle(val => interval(2000)))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
