import { Readable } from 'node:stream'

class OneToHendredStream extends Readable {

  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 5) {
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i))

        this.push(buffer)
      }
    }, 1000)
  }

}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHendredStream()
})
  .then(res => res.text())
  .then(console.log)

