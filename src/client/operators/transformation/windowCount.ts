import { interval } from 'rxjs'
import { windowCount, mergeAll, tap } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  windowCount(4),
  tap(() => console.log('new window')),
  mergeAll(),
)

const subscribe = example.subscribe(val => console.log(val))
