import { interval } from 'rxjs'
import { bufferToggle } from 'rxjs/operators'

const sourceInterval = interval(1000)
const startInterval = interval(5000)

const closingInterval = val => {
  console.log('Value ', val)
  return interval(3000)
}
const example = sourceInterval.pipe(
  bufferToggle(startInterval, closingInterval)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
