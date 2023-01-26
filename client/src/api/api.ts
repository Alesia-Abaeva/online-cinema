import { METHODS } from '../const/api/methods';
import { API_KEY, BASE_URL } from '../const/api/url';

class ApiWrapper {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchWrapper<ResponseBody>(url: string, options: RequestInit) {
    const response = await fetch(url, options);

    const data: ResponseBody = await response.json();

    return { data, response };
  }

  private makeUrl(endpoint: string, options?: { [key: string]: string | number | null }): string {
    const queryParams: string = Object.entries(options ?? {})
      .map(([param, value]) => `${param}=${String(value)}`)
      .join('&');

    const queryString = queryParams && `?${queryParams}`;

    return `${this.baseUrl}/${endpoint}${queryString}`;
  }

  async get<ResponseBody>(endpoint: string, options?: { [key: string]: string | number | null }) {
    const url: string = this.makeUrl(endpoint, options);

    return await this.fetchWrapper<ResponseBody>(url, {
      method: METHODS.GET,
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });
  }

  async post<RequestBody, ResponseBody>(endpoint: string, body: RequestBody, options?: RequestInit) {
    const url: string = this.makeUrl(endpoint);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    };

    return await this.fetchWrapper<ResponseBody>(url, {
      ...(options ?? {}),
      body: JSON.stringify(body),
      headers,
      method: METHODS.POST,
    });
  }

  async put<RequestBody, ResponseBody>(endpoint: string, body: RequestBody, options?: RequestInit) {
    const url: string = this.makeUrl(endpoint);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    };

    return await this.fetchWrapper<ResponseBody>(url, {
      ...(options ?? {}),
      body: JSON.stringify(body),
      headers,
      method: METHODS.PUT,
    });
  }

  async patch<ResponseBody>(endpoint: string, options?: { [key: string]: string | number }) {
    const url: string = this.makeUrl(endpoint, options);

    return await this.fetchWrapper<ResponseBody>(url, {
      method: METHODS.PATCH,
    });
  }

  async delete<ResponseBody>(endpoint: string) {
    const url: string = this.makeUrl(endpoint);

    return await this.fetchWrapper<ResponseBody>(url, {
      method: METHODS.DELETE,
    });
  }
}

export const apiCall = new ApiWrapper(BASE_URL);
