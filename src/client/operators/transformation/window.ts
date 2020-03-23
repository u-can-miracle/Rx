import { timer, interval } from 'rxjs'
import { window as windowRx, scan, mergeAll } from 'rxjs/operators'

const source = timer(0, 1000)
const example = source.pipe(windowRx(interval(3000)))
const count = example.pipe(scan((acc, curr) => acc + 1, 0))

const subscribe = count.subscribe(val => console.log(val))
