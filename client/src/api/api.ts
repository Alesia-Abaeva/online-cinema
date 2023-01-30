import { METHODS } from 'src/const/api/methods';
import { BASE_URL, URL_SERVER } from 'src/const/api/url';

class ApiWrapper {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchWrapper<ResponseBody>(url: string, options: RequestInit) {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
      });
      console.log(response);
      const data: ResponseBody = await response.json();

      return { data, response };
    } catch (e) {
      console.log(e);
      return { data: e as { message: string } };
    }
  }

  private makeUrl(endpoint: string, options?: RequestData | RequestData[] | null): string {
    let queryParams = '';
    if (Array.isArray(options)) {
      queryParams = options
        .map((params) =>
          Object.entries(params ?? {})
            .map(([param, value]) => `${param}=${String(value)}`)
            .join('&')
        )
        .join('&');
      console.log(queryParams);
    } else {
      queryParams = Object.entries(options ?? {})
        .map(([param, value]) => `${param}=${String(value)}`)
        .join('&');
    }

    const queryString = queryParams && `?${queryParams}`;
    console.log('queryString', queryString, `${this.baseUrl}/${endpoint}${queryString}`);
    return `${this.baseUrl}/${endpoint}${queryString}`;
  }

  async get<ResponseBody>(endpoint: string, options?: RequestData | RequestData[]) {
    const url: string = this.makeUrl(endpoint, options);

    return await this.fetchWrapper<ResponseBody>(url, {
      method: METHODS.GET,
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
      // mode: 'no-cors',
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

  async patch<ResponseBody>(endpoint: string, options?: RequestData) {
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
export const backCall = new ApiWrapper(URL_SERVER);
