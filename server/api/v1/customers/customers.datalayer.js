/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const Customers = require('./customers.model')

exports.findAll = () => {
  return Customers.find({})
    .exec()
}

exports.createRecords = (body) => {
  return Customers.insertMany(body)
}

exports.findOne = (id) => {
  return Customers.findOne({customerId: id})
    .exec()
}

exports.updateOne = (id, updated) => {
  return Customers.update({_id: id}, updated)
    .exec()
}

exports.deleteOne = (id) => {
  return Customers.deleteOne({_id: id})
    .exec()
}
