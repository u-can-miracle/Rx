import { iif, of, interval } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

const r$ = of('R')
const x$ = of('X')

const source = interval(1000)
  .pipe(mergeMap(val => iif( () => val % 2 === 0, r$, x$ )))

const subscribe = source.subscribe(console.log)
