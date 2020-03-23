import { repeat, delay } from 'rxjs/operators'
import { of } from 'rxjs'

const example = of('delayed')
  .pipe(delay(2000))
  .pipe(repeat(2))

const subscribe = example.subscribe(
  val => console.log(val),
  err => console.log('err: ', err),
)
