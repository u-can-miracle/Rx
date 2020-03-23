import { interval, of } from 'rxjs'
import { expand, take } from 'rxjs/operators'

const source = of(2)
const example = source.pipe(
  expand(val => {
    console.log(`Passed val: ${val}`)

    return of(1 + val)
  }),
  take(5),
)

const subscribe = example.subscribe(val => console.log(val))
