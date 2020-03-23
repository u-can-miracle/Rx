import { Subject } from 'rxjs'

const subject = new Subject(3)

subject.next(1)
subject.subscribe(x => console.log('A ', x))

subject.next(2)

subject.subscribe(x => console.log('B ', x))
subject.next(3)
