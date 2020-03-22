import { interval } from 'rxjs'
import { publish, tap } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(
  tap(() => console.log('working!')),
  publish(),
)

const subscribe = example.subscribe(
  val => console.log('subscribe 1', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
const subscribe2 = example.subscribe(
  val => console.log('subscribe 2', val),
  error => console.log('error', error),
  () => console.log('complete'),
)

setTimeout(() => {
  example.connect()
}, 4000);
