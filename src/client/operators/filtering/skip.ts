import { interval } from 'rxjs'
import { skip } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(skip(4))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
