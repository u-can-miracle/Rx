import { fromEvent, of } from 'rxjs'
import { mapTo, mergeScan } from 'rxjs/operators'

const click$ = fromEvent(document, 'click')
const one$ = click$.pipe(mapTo(1))

const example = one$.pipe(
  mergeScan((acc, one) => of(acc + one), 0),
)

const subscribe = example.subscribe(val => console.log(val))
