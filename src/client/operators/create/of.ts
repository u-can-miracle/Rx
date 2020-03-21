import 'babel-polyfill'

import {
  Observable,
  fromEvent,
  from,
  generate,
  interval,
  of,
} from 'rxjs'
import {
  take,
  mergeMap,
  switchMap,
  flatMap,
  map,
  tap,
  retry,
  retryWhen,
  delay,
} from 'rxjs/operators'
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

console.clear()

const source = of({ name: 'Brian'}, [1,2,3], function fn() { return 123 })

const subscribe = source.subscribe(console.log)
