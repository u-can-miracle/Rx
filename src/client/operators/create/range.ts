import 'babel-polyfill'

import {
  Observable,
  fromEvent,
  from,
  generate,
  interval,
  of,
  range,
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

const source = range(1, 10)

const example = source.subscribe(console.log)
