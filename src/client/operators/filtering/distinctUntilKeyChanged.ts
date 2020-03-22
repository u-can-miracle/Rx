import { from } from 'rxjs'
import { distinctUntilKeyChanged } from 'rxjs/operators'

const example = from([
  {name: 1},
  {name: 1},
  {name: 2},
  {name: 1},
  {name: 3},
]).pipe(
  distinctUntilKeyChanged('name')
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
