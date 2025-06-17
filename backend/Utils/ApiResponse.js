export class ApiResponse {
  constructor(statusCode, data = "Success", messaage) {
    this.statusCode = statusCode;
    this.messaage = messaage;
    this.data = data;
    this.success = statusCode < 400;
  }
}
