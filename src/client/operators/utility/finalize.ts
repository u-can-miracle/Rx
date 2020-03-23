import { interval } from 'rxjs'
import { take, finalize } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  take(5),
  finalize(() => console.log('Finalize')),
)

const subscribe = example.subscribe(
  val => console.log(val),
  err => console.log('err: ', err),
)
