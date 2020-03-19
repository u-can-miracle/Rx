import 'babel-polyfill'

import { Observable, fromEvent, from } from 'rxjs'
import {
  take,
  mergeMap,
  switchMap,
  flatMap,
  map,
  tap,
} from 'rxjs/operators'
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent'

console.clear()

// const button: FromEventTarget<Event> = document.getElementById('button')
// const button = document.getElementById('button')
const button = document.querySelectorAll('#button')
const results = document.querySelectorAll('#results')

const click = fromEvent(button, 'click')

async function load(url: string) {
    try {
      const response = await fetch(url, {
        method: 'GET',
      })

      const json = await response.json()

      return json
    } catch (err) {
      throw err
    }
}

function handleData(data, index?) {
  console.log(data)

  return data
}

click.pipe(
  mergeMap(
    () => from(load('/info')),
  ),
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
