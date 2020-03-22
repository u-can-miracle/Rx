import { of } from 'rxjs'
import { find, repeatWhen, mapTo, startWith, filter } from 'rxjs/operators'

const example = of(1,2,3,4).pipe(
  find(item => item === 3),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
