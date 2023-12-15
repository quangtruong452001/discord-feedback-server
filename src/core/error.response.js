'use strict';

import { StatusCodes } from '../httpStatusCode/statusCodes.js';
import { ReasonPhrases } from '../httpStatusCode/reasonPhrases.js';
export class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    statusCode = StatusCodes.BAD_REQUEST
  ) {
    super(message, statusCode);
  }
}

