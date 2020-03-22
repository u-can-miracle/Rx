import { interval } from 'rxjs'
import { skipWhile } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(skipWhile(x => x <= 3))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
