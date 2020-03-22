import { of } from 'rxjs'
import { takeWhile } from 'rxjs/operators'

const source = of(1,2,3,4,5)
const example = source.pipe(
  takeWhile(val => val <= 4)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
