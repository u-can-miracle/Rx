import { fromEvent, timer, of, interval } from 'rxjs'
import { buffer, filter, throttleTime } from 'rxjs/operators'

const source = interval(1000)
const source1 = timer(3000)

const example = source.pipe(
  buffer(source1)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
