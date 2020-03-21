import { take, delay } from 'rxjs/operators'
import { interval, zip, of } from 'rxjs'

const source = interval(3000)
const another = of('data')
const example = zip(source, another, source.pipe(take(2)))

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
