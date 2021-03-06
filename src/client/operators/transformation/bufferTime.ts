import { interval } from 'rxjs'
import { bufferTime } from 'rxjs/operators'

const source = interval(1000)

const example = source.pipe(
  bufferTime(3000)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
