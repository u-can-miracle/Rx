import { pairwise, take } from 'rxjs/operators'
import { interval } from 'rxjs'

const example = interval(1000)
  .pipe(pairwise(), take(5))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
