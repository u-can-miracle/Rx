import { of } from 'rxjs'
import { concatMap, delay, mergeMap, tap } from 'rxjs/operators'

const source = of(2000, 1000)

// sequentially
const example = source.pipe(
  concatMap(val => of(`Delayed by ${val} ms`).pipe(delay(val)))
)
const subscribe = example.subscribe(val => console.log('With concat ', val))

// paralel
const mergeMapExample = source
  .pipe(
    delay(5000),
    tap(() => console.log('mergeMap goes')),
    mergeMap(val => of(`Delayed by: ${val} ms`).pipe(delay(val)))
  )
  .subscribe(val => console.log(`With mergeMap: ${val}`))
