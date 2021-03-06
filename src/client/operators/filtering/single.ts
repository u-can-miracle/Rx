import { from } from 'rxjs'
import { single } from 'rxjs/operators'

const source = from([1, 2, 3, 4, 5])
const example = source.pipe(
  single(val => val === 4)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
