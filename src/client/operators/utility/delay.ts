import { of, fromEvent } from 'rxjs'
import { map, tap, delay } from 'rxjs/operators'

const source = fromEvent(document, 'click')
const example = source.pipe(
  delay(1500),
)

const subscribe = example.subscribe(val => console.log(val))
