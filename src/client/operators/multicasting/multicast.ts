import { Subject, interval } from 'rxjs'
import { take, tap, multicast, mapTo } from 'rxjs/operators'

const source = interval(2000).pipe(take(5))
const example = source.pipe(
  tap(() => console.log('Side effect #1')),
  mapTo('Result'),
)

const multi = example.pipe(
  multicast(() => new Subject())
)

const subscribe1 = multi.subscribe(console.log)
const subscribe2 = multi.subscribe(console.log)

multi.connect()
