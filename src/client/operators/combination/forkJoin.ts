import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators'

const example = forkJoin({
  google: ajax.getJSON('https://api.github.com/users/google'),
  microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
  users: ajax.getJSON('https://api.github.com/users').pipe(delay(4000)),
})

const subscribe = example.subscribe(
  val => console.log('val', val),
  error => console.log('error', error),
  () => console.log('complete'),
)
