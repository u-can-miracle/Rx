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

const hello = Observable.create(observer => {
  observer.next('hello')
  observer.next('wworld')
  observer.complete()
})

const subscribe = hello.subscribe(
  val => console.log(val),
  console.error,
  () => console.log('complete')
)
