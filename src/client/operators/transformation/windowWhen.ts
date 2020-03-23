import { timer, interval } from 'rxjs'
import { windowWhen, mergeAll, tap } from 'rxjs/operators'

const source = timer(0, 1000)
const toggle = interval(5000)
const example = source.pipe(
  windowWhen(() => interval(5000)),
  tap(() => console.log('new window')),
  mergeAll(),
)

const subscribe = example.subscribe(val => console.log(val))
