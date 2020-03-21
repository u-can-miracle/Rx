import 'babel-polyfill'

import { Observable, fromEvent, from, generate } from 'rxjs'
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

generate(
  2,
  x => x <= 22,
  x => x + 3
).subscribe(console.log)
