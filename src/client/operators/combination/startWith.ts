import { startWith, scan } from 'rxjs/operators'
import { of } from 'rxjs'

const source = of('1', '2', '3')
const example = source.pipe(
  startWith('Hello'),
  scan((acc, curr) => `${acc} ${curr}`)
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
