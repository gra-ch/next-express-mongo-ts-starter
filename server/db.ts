import mongoose from 'mongoose'

let db: mongoose.Connection

export const connect = () => {
  const URL = 'no url'
  if (db) {
    return
  }
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  db = mongoose.connection
  db.once('open', () => {
    console.log('Connected to database')
  })
  db.on('error', () => {
    console.log('Error connecting to database')
  })
}

export const disconnect = () => {
  if (!db) {
    return
  }
  mongoose.disconnect()
}
