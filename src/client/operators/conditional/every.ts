import { every } from 'rxjs/operators'
import { of } from 'rxjs'

const allEvents = of(2, 4, 6, 8, 11)
const source = allEvents.pipe(
  every(val => val % 2 === 0)
)

const subscribe = source.subscribe(console.log)
