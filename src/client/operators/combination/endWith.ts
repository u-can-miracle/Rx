import { endWith } from 'rxjs/operators'
import { of } from 'rxjs'

const source = of('Hi', 'Friend', 'Foodbye')

const example = source.pipe(endWith('Friend'))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
