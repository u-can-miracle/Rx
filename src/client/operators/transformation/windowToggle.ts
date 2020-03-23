import { timer, interval } from 'rxjs'
import { windowToggle, mergeAll, tap } from 'rxjs/operators'

const source = timer(0, 1000)
const toggle = interval(5000)
const example = source.pipe(
  windowToggle(toggle, val => interval(val * 1000)),
  tap(() => console.log('new window')),
  mergeAll(),
)

const subscribe = example.subscribe(val => console.log(val))
