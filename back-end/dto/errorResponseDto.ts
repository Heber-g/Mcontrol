export class errorResponseDto {
  error;

  constructor({ status_code = 400, code = 'ERROR', message = '', details = { fieldErrors: [] }, traceId = null } = {}) {
    this.error = {
      status_code: Number(status_code) || 400,
      code: code || 'ERROR',
      message: message || '',
      details: details || { fieldErrors: [] },
      traceId: traceId || null,
    };
  }

  static validation(fieldErrors = [], message = 'Campo obrigatório ausente', traceId = null) {
    return new errorResponseDto({
      status_code: 400,
      code: 'VALIDATION_ERROR',
      message,
      details: { fieldErrors },
      traceId,
    });
  }
}

module.exports = { errorResponseDto };