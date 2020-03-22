import { fromEvent } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

const click = fromEvent(document, 'click')
const example = click.pipe(
  debounceTime(1500),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
