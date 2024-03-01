import { CLOUD_API } from 'src/config-global';

import { HttpRequestError } from './errorHandling';

/* eslint-disable class-methods-use-this */
interface IRequestUtils {
  get<T>(url: string, headers?: HeadersInit): Promise<T>;
  post<T, U>(url: string, body: U, headers?: HeadersInit): Promise<T>;
  put<T, U>(url: string, body: U, headers?: HeadersInit): Promise<T>;
  delete<T>(url: string, headers?: HeadersInit): Promise<T>;
}

class RequestUtils implements IRequestUtils {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get<T>(url: string, headers: HeadersInit = {}): Promise<T> {
    return this.fetchRequest<T>(url, 'GET', headers);
  }

  async post<T, U>(url: string, body: U, headers: HeadersInit = {}): Promise<T> {
    return this.fetchRequest<T, U>(url, 'POST', headers, body);
  }

  async put<T, U>(url: string, body: U, headers: HeadersInit = {}): Promise<T> {
    return this.fetchRequest<T, U>(url, 'PUT', headers, body);
  }

  async delete<T>(url: string, headers: HeadersInit = {}): Promise<T> {
    return this.fetchRequest<T>(url, 'DELETE', headers);
  }

  private async fetchRequest<T, U = undefined>(
    endpoint: string,
    method: string,
    headers: HeadersInit,
    body?: U
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        'x-api-key': CLOUD_API.apiKey ?? '',
        'x-api-token': CLOUD_API.apiToken ?? '',
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new HttpRequestError(`HTTP error ${response.status}`, response.status, response.url);
    }

    return response.json();
  }
}

// Create an instance of RequestUtils with the base URL
export const request = new RequestUtils(CLOUD_API.baseurl ?? '');

/* How to use it?
  * import { request } from 'src/utils/fetch';

  * GET Request
  * const data = await request.get<DataType>(endpoint);

  * POST/PUT Request
  * const data = await request.post<ResponseTypeInterface, BodyInterface>(endpoint, body);
*/
