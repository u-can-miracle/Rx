import { merge } from 'rxjs/operators'
import { interval } from 'rxjs'

const first = interval(1000)
const second = interval(3000)

const example = first.pipe(merge(second))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
