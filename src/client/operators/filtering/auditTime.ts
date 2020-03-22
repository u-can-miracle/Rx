import { fromEvent } from 'rxjs'
import { auditTime } from 'rxjs/operators'

const source = fromEvent(document, 'click')
const example = source.pipe(auditTime(1000))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
