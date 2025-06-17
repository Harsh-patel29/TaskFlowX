export class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    erorrs = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.erorrs = erorrs;
    this.success = false;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
