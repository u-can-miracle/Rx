import { interval, timer } from 'rxjs'
import { skipUntil } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(skipUntil(timer(3400)))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
