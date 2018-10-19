
module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('./api/v1/test'))
  app.use('/api/v1/customers', require('./api/v1/customers'))

  // index page
  app.get('/', function (req, res) {
    var customer = {
      company_id: {companyName: 'CloudKibo'},
	    subscriber_id: {
        profilePic: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1546535128769449&width=1024&ext=1541507727&hash=AeRq0cXNg1K-g1D8',
        source: 'direct message',
        datetime: 'Wed Oct 12 2018',
        locale: 'en_GB',
        gender: 'female',
        pageId: {pageName: 'Test 4'}},
	    customer_id: 'cust_1234',
      first_name: 'Anisha',
	    last_name: 'Chhatwani',
	    details: [
        {flightNo: 'PA-420'},
        {SeatNo: 15},
        {origin: 'karachi'},
        {destination: 'US'},
        {dateTime: 'Wed 10 Oct'},
        {travelClass: 'Business'},
        {Fare: '$100'},
        {Status: 'Confirmed'}
      ]
    }
    res.render('layouts/index', {
       customer: customer,
       detailField: ''
   })
  })

  app.route('/:url(api)/*').get((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  }).post((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  })
}
