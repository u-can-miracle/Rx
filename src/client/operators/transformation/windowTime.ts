import { interval } from 'rxjs'
import { windowTime, mergeAll, tap } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  windowTime(4000),
  tap(() => console.log('new window')),
  mergeAll(),
)

const subscribe = example.subscribe(val => console.log(val))
