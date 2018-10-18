let mongoose = require('mongoose')
let Schema = mongoose.Schema

let customerSchema = new Schema({
  company: Schema.Types.Mixed,
  subscriber: Schema.Types.Mixed,
  customerId: String,
  firstName: String,
  lastName: String,
  details: Schema.Types.Mixed,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('customers', customerSchema)
