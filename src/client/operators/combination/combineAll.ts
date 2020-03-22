import { take, map, combineAll, tap } from 'rxjs/operators'
import { interval } from 'rxjs'

const source = interval(500).pipe(take(2))
const example = source.pipe(
  tap(val => console.log('tap ', val)),
  map(val =>
    interval(2000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
).pipe(combineAll())

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
