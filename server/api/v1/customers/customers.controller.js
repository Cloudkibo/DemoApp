const logger = require('../../../components/logger')
// const logicLayer = require('./test.logiclayer')
const dataLayer = require('./customers.datalayer')
const TAG = '/api/v1/customers/index.js'

exports.index = function (req, res) {
  logger.serverLog(TAG, 'Hit the customers index')
  dataLayer.findAll()
    .then(customers => {
      res.status(200).json({
        status: 'success',
        payload: customers
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'failed',
        payload: `Failed to fetch customers ${JSON.stringify(err)}`
      })
    })
}

exports.fetch = function (req, res) {
  logger.serverLog(TAG, 'Hit the customers fetch')
  dataLayer.findOne(req.params.id)
    .then(customer => {
      res.status(200).json({
        status: 'success',
        payload: customer
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'failed',
        payload: `Failed to fetch customer ${JSON.stringify(err)}`
      })
    })
}

exports.create = function (req, res) {
  logger.serverLog(TAG, 'Hit the customers create')
  dataLayer.createRecords(req.body)
    .then(customers => {
      res.status(200).json({
        status: 'success',
        payload: 'Records have been created successfully!'
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'failed',
        payload: `Failed to create customer records ${JSON.stringify(err)}`
      })
    })
}

exports.update = function (req, res) {
  logger.serverLog(TAG, 'Hit the customers update')
  logger.serverLog(TAG, JSON.stringify(req.body))
  dataLayer.updateOne(req.params.id, req.body)
    .then(updatedCustomer => {
      res.status(200).json({
        status: 'success',
        payload: updatedCustomer
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'failed',
        payload: `Failed to update customer ${JSON.stringify(err)}`
      })
    })
}

exports.delete = function (req, res) {
  logger.serverLog(TAG, 'Hit the customers delete')
  dataLayer.deleteOne(req.params.id)
    .then(deletedCustomer => {
      res.status(200).json({
        status: 'success',
        payload: deletedCustomer
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'failed',
        payload: `Failed to delete customer ${JSON.stringify(err)}`
      })
    })
}

exports.getCustomers = function (req, res) {
  logger.serverLog(TAG, 'Hit the customers getCustomers')
  dataLayer.findCompanyCustomers(req.params.id)
    .then(customers => {
      res.status(200).json({
        status: 'success',
        payload: customers
      })
    })
    .catch(err => {
      res.status(500).json({
        status: 'failed',
        payload: `Failed to fetch customers ${JSON.stringify(err)}`
      })
    })
}
