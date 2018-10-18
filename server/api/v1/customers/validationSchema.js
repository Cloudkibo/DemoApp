/*
This file will contain the validation schemas.
By separating it from controller, we are cleaning the code.
Now the middleware will automatically send error response if the payload fails
*/

exports.customerCreatePayload = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'array',
  items: [
    {
      type: 'object',
      properties: {
        company: {
          type: 'object'
        },
        subscriber: {
          type: 'object'
        },
        customerId: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        details: {
          type: 'object'
        }
      },
      required: [
        'company',
        'customerId',
        'firstName',
        'lastName',
        'details'
      ]
    }
  ]
}

exports.customerUpdatePayload = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    company: {
      type: 'object'
    },
    subscriber: {
      type: 'object'
    },
    customerId: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    details: {
      type: 'object'
    }
  }
}
