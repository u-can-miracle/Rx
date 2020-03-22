import { of } from 'rxjs'
import { distinct } from 'rxjs/operators'

const example = of(1,2,3,4,5,1,3,4,7,8,2).pipe(
  distinct()
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
