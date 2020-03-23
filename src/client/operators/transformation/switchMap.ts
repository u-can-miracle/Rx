import { interval, fromEvent } from 'rxjs'
import { switchMap } from 'rxjs/operators'

const example = fromEvent(document, 'click').pipe(
  switchMap(() => interval(1000)),
)

const subscribe = example.subscribe(val => console.log(val))
