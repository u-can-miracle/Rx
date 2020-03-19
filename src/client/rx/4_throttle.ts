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

const btn = document.querySelector('#clickMe')
const clicks = Rx.fromEvent(btn, 'click')

const open = Rx.interval(1000)

clicks.pipe(scan((acc) => {
  // console.log(acc)
  // console.log(curr)
  return acc + 1;
}, 0))
  .pipe(
    throttle(val => Rx.interval(1000))
  )
  // .pipe(buffer(open))
  // .pipe(filter((x: []) => {
  //   console.log(x.length > 0)
  //   return x.length > 0
  // }))
  .forEach(x => sendValues(x))

function sendValues(arr) {
  const pre = document.createElement('pre')
  pre.innerHTML = JSON.stringify(arr)

  document.querySelector('#results')
    .appendChild(pre)
}

console.clear()
