import { from, merge } from 'rxjs'
import { partition, map } from 'rxjs/operators'

const source = from([1, 2, 3, 4, 5, 6])
const [even, odds] = source.pipe(
  partition(val => val % 2 === 0),
)

const subscribe = even.subscribe(val => console.log('even', val))
const subscribe1 = odds.subscribe(val => console.log('odds', val))
