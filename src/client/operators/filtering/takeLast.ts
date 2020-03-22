import { of } from 'rxjs'
import { takeLast } from 'rxjs/operators'

const source = of('ignore','ignore', ' hello', 'world')
const example = source.pipe(takeLast(2))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
