'use strict';

const {
  StatusCodes,
  ReasonPhrases,
} = require('../httpStatusCode/httpStatusCode');

class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    metadata = {},
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }) {
    super({
      message,
      metadata,
    });
  }
}

class Created extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    metadata,
    options,
  }) {
    super({
      message,
      metadata,
      statusCode,
      reasonStatusCode,
    });
    this.options = options;
  }
}

module.exports = {
  SuccessResponse,
  OK,
  Created,
};
