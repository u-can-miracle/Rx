import { of, interval } from 'rxjs'
import { map, tap } from 'rxjs/operators'

const source = of(1,2,3,4,5)
const example = source.pipe(
  tap(val => console.log(`val before: ${val}`)),
  map(val => val + 10),
  tap(val => console.log(`val after: ${val}`)),
)

const subscribe = example.subscribe(val => console.log(val))
