import { AsyncSubject } from 'rxjs'

const sub = new AsyncSubject()

sub.subscribe(console.log)
sub.next('skip')
sub.subscribe(console.log)
sub.next('will show')
sub.subscribe(console.log)
sub.complete()
