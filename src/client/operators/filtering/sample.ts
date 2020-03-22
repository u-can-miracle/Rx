import { interval } from 'rxjs'
import { sample } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(sample(interval(2500)))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
