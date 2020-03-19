import 'babel-polyfill'
// import { Observable } from 'rxjs'
import * as Rx from 'rxjs'

console.clear()

const source = Rx.Observable.create(observer => {
  const timerId = setTimeout(() => {
    try {
      throw 'Boom'
      console.log('tomeout')
      observer.next(42)
      observer.complete()
    } catch (err) {
      observer.error(err)
    }
  }, 1000)

  console.log('Started')

  return () => {
    console.log('unsubscribe')
    clearTimeout(timerId)
  }
})

const sub = source.subscribe((x) => {
  console.log('next', x)
}, (err) => {
  console.log(err)
}, () => {
  console.log('done')
})

setTimeout(() => {
  // sub.unsubscribe()
}, 500)
