import { withLatestFrom, map } from 'rxjs/operators'
import { interval } from 'rxjs'

const source = interval(5000)
const secondSource = interval(1000)

const example = source.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First source 5s: ${first}, second 1s: ${second}`
  })
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
