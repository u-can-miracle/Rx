import { of, from } from 'rxjs'
import { sequenceEqual, switchMap } from 'rxjs/operators'

const expectedSequence = from([4, 5, 6])

const source = of([1, 2, 3], [4, 5, 6], [7, 8, 9])
  .pipe(
    switchMap(
      arr => from(arr).pipe(sequenceEqual(expectedSequence))
    )
  )

const subscribe = source.subscribe(console.log)
