import 'babel-polyfill'
// import { Observable } from 'rxjs'
import * as Rx from 'rxjs'
import { take, filter, map } from 'rxjs/operators'
// import { interval } from 'rxjs'

console.clear()

const source = Rx.interval(500).pipe(take(6))

source
  .pipe(filter(x => x % 2 === 1))
  .pipe(map(x => x + '!'))
  .forEach(x => console.log(x))
