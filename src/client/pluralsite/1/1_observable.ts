import 'babel-polyfill'

import * as Rx from 'rxjs'
import {
  take,
  buffer,
  filter,
  map,
  scan,
  throttle,
} from 'rxjs/operators'

console.clear()

const numbers = [1,2,3,4]
const source = Rx.from(numbers)

source.subscribe(
  val => console.log('val: ', val),
  err => console.log('err: ', err),
  () => console.log('complete'),
)

// class MyObserver implements Rx.Observer<number>{
//   next(value) {
//     console.log('value: ', value)
//   }
//
//   error(e) {
//     console.log('error: ', e)
//   }
//
//   complete() {
//     console.log('complete')
//   }
// }
//
// source.subscribe(new MyObserver())
