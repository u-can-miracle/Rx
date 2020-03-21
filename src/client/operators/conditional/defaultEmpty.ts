import { defaultIfEmpty } from 'rxjs/operators'
import { empty } from 'rxjs'

const source = empty().pipe(defaultIfEmpty('Observable.empty()'))

const subscribe = source.subscribe(console.log)
