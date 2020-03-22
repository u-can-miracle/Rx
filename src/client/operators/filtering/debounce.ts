import { of, timer } from 'rxjs'
import { debounce } from 'rxjs/operators'

const example = of('Wait', '1', '2', '3', '4', 'Last will display')
const debouncedExample = example.pipe(
  debounce(() => timer(1000)),
)

const subscribe = debouncedExample.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
