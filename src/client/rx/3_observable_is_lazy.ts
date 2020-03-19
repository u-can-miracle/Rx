import 'babel-polyfill'

import * as Rx from 'rxjs'
import { take, filter, map } from 'rxjs/operators'

console.clear()

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('Promise timer')
    resolve(43)
  }, 1500)

  console.log('promise started')
})

promise.then(x => console.log(x))

const source$ = Rx.Observable.create(observer => {
  const id = setTimeout(() => {
    console.log('Observr timer')
    observer.next(43)
  }, 1500)

  console.log('observer started')

  return () => {
    console.log('unsubscribe cb')
    clearTimeout(id)
  }
})

const result$ = source$.pipe(map(x => console.log(x)))
