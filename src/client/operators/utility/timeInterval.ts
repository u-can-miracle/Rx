import { fromEvent } from 'rxjs'
import { timeInterval, tap } from 'rxjs/operators'

const example = fromEvent(document, 'mousedown')
  .pipe(timeInterval(), tap(console.log))

const subscribe = example.subscribe(
  val => console.log('val', val),
  err => console.log('err: ', err),
)
