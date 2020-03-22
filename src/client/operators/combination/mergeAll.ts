import { take, map, delay, mergeAll } from 'rxjs/operators'
import { interval } from 'rxjs'

const source = interval(1000).pipe(take(5))

const example = source.pipe(
  map(val => source.pipe(
      delay(5000),
      take(3),
    )
  ),
  mergeAll(),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
