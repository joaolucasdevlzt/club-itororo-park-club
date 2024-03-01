export class HttpRequestError extends Error {
  constructor(message: string, public status: number, public url: string) {
    super(message);
    this.name = 'HttpRequestError';
  }
}
