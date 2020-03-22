import { interval } from 'rxjs'
import { bufferWhen } from 'rxjs/operators'

const sec1 = interval(1000)
const sec5 = () => interval(5000)

const example = sec1.pipe(
  bufferWhen(sec5)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
