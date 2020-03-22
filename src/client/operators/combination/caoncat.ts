import { of, concat } from 'rxjs'

const example = concat(
  of(1, 2, 3),
  of(4, 5, 6),
  of(7, 8, 9),
)

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
