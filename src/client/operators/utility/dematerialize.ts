import { from, Notification } from 'rxjs'
import { dematerialize } from 'rxjs/operators'

const example = from([
  Notification.createNext('SUCCESS!'),
  Notification.createError('ERROR!'),
]).pipe(
  dematerialize(),
)

const subscribe = example.subscribe(
  val => console.log(val),
  err => console.log('err: ', err),
)
