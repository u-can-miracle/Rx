import { from } from 'rxjs'
import { groupBy, mergeMap, toArray } from 'rxjs/operators'

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
]
const source = from(people)
const example = source.pipe(
  groupBy(person => person.age),
  mergeMap(group => group.pipe(toArray())),
)

const subscribe = example.subscribe(val => console.log(val))
