import { from } from 'rxjs'
import { map } from 'rxjs/operators'

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
]
const source = from(people)
const example = source.pipe(
  map(person => person.age),
)

const subscribe = example.subscribe(val => console.log(val))
