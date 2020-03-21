import { interval, race } from 'rxjs'
import { mapTo } from 'rxjs/operators'

const example = race(
  interval(2000),
  interval(1000).pipe(mapTo('Is won')),
  interval(3000),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
