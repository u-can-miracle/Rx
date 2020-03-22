import 'babel-polyfill'

import { Observable, fromEvent, from, interval } from 'rxjs'
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

const TIMER_NAME = 'TIMER_NAME'
console.time(TIMER_NAME)
console.timeEnd(TIMER_NAME)

const githubUsers = 'https://api.github.com/users?per_page=2'

const users = ajax.getJSON(githubUsers)

const subscribe = users.subscribe(
  console.log,
)
