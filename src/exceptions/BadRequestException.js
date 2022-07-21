class BadRequestException extends Error {
  constructor(msg = '잘못된 요청입니다', field = null) {
    super(msg);
    this._msg = msg;
    this._statusCode = 400;
    this._field = field;
  }
  get statusCode() {
    return this._statusCode;
  }
  get field() {
    return this._field;
  }
  get msg() {
    return this._msg;
  }
  set field(params) {
    this._field = params;
  }
}

export default BadRequestException;
