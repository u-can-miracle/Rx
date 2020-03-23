import { of } from 'rxjs'
import { reduce } from 'rxjs/operators'

const source = of(1, 2, 3, 4)
const example = source.pipe(
  reduce((acc, val) => acc + val),
)

// completes after observalbe completes and return one value

const subscribe = example.subscribe(val => console.log(val))
