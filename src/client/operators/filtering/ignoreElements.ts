import { interval } from 'rxjs'
import { take, ignoreElements } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  take(4),
  ignoreElements(),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
