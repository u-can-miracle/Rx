import { ReplaySubject } from 'rxjs'

const subject = new ReplaySubject(3)

subject.next(1)
subject.next(2)
subject.subscribe(console.log)

subject.next(3)
subject.next(4)

subject.subscribe(console.log)

subject.next(5)
