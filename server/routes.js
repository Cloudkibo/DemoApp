const CustomerDataLayer = require('./api/v1/customers/customers.datalayer')

module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('./api/v1/test'))
  app.use('/api/v1/customers', require('./api/v1/customers'))

  // index page
  app.get('/', function (req, res) {
    res.render('layouts/notFound')
  })

  // customer info page
  app.get('/:id', function (req, res) {
    CustomerDataLayer.findOne(req.params.id)
      .then(customer => {
        res.render('layouts/index', {
          customer: customer,
          detailField: ''
        })
      })
      .catch(() => {
        res.render('layouts/notFound')
      })
  })

  app.route('/:url(api)/*').get((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  }).post((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  })
}
