import { from } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

const example = from([1,1,2,2,3,4]).pipe(
  distinctUntilChanged(),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
