import { interval } from 'rxjs'
import { toArray, take } from 'rxjs/operators'

const example = interval(300)
  .pipe(take(10), toArray())

const subscribe = example.subscribe(val => console.log(val))
