import 'babel-polyfill'

import {
  Observable,
  fromEvent,
  from,
  generate,
  interval,
  of,
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
} from 'rxjs/operators'
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

console.clear()

// const source = 
