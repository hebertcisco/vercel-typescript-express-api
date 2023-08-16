import { HttpStatus } from '../../enums/http-status.enum';

type MessageType = {
  statusCode: HttpStatus;
  message: string;
  error?: string | object;
};
export class HttpException {
  public readonly message: MessageType;

  public readonly statusCode: number;

  public readonly errors?: string | null;

  public constructor(
    message: string | MessageType,
    statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    errors: string | null = null
  ) {
    console.info(message);

    this.message = {
      statusCode,
      message: typeof message === 'string' ? message : message.message,
    };

    this.errors = errors;

    this.statusCode = statusCode;
  }
}
