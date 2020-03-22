import { timer } from 'rxjs'
import { tap, mapTo, share } from 'rxjs/operators'

const source = timer(1000)
const example = source.pipe(
  tap(() => console.log('Side effect')),
  mapTo('Result'),
)

const subscribe = example.subscribe(val => console.log('1', val))
const subscribeTwo = example.subscribe(val => console.log('2', val))

// shared
const shareExample = example.pipe(share())

const subscribeThree = shareExample.subscribe(val => console.log('3', val))
const subscribeFour = shareExample.subscribe(val => console.log('4', val))
