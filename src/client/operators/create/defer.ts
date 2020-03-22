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

const s1 = of(`s1 - ${new Date()}`)

// defer - it's fn creates observable at the moment of subscription
const s2 = defer(() => of(`s2 - ${new Date()}`))

console.log(new Date())

timer(2000)
  .pipe(switchMap(() => merge(s1, s2)))
  .subscribe(val => console.log('val ', val))
