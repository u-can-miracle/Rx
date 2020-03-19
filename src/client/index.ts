import 'babel-polyfill'

import { Observable, fromEvent, from } from 'rxjs'
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

// const button: FromEventTarget<Event> = document.getElementById('button')
// const button = document.getElementById('button')
const button = document.querySelectorAll('#button')
const results = document.querySelectorAll('#results')

const click = fromEvent(button, 'click')

async function load(url: string) {
  console.log('load')

  throw new Error('Boom')
  console.log('123')
    // try {
      const response = await fetch(url, {
        method: 'GET',
      })

      const json = await response.json()

      return json
    // } catch (err) {
    //   throw err
    // }
}

function handleData(data, index?) {
  console.log(data)

  return data
}

click.pipe(
  mergeMap(
    () => from(load('/infos')),
  ),
  retry(3),
  // delay(3000),
  // retryWhen(errors =>
  //   errors.pipe(
  //     tap(val => console.log('Retry WS.', val)),
  //   )
  // )
)
  .subscribe(
    handleData,
    // e => load('/info'),
    e => console.log('err: ', e),
    () => console.log('complete'),
  )

// click.subscribe(
//   e => load('/info'),
//   e => console.log(e),
//   () => console.log('complete'),
// )

// TODO 03-05
