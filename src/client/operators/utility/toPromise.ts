import { of, timer, interval } from 'rxjs'
import { concatMap, timeoutWith, catchError, delay } from 'rxjs/operators'

const example = of(1000)
  .toPromise()
  .then(val => {
    console.log('val ', val)
  })
