import { fromEvent, interval } from 'rxjs'
import { audit } from 'rxjs/operators'

const clicks = fromEvent(document, 'click')
const example = clicks.pipe(audit(ev => interval(1000)))

const subscribe = example.subscribe(
  val => console.log('subscribe 1', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
