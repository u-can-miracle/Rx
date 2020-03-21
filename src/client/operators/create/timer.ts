import 'babel-polyfill'

import {
  Observable,
  fromEvent,
  from,
  interval,
  defer,
  of,
  timer,
  merge,
  empty,
  generate,
  range,
  throwError,
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
  combineAll,
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

console.clear()

const source = timer(1000, 2000)

source.subscribe(console.log)
