import { METHODS } from 'src/const/api/methods';
import { BASE_URL, URL_SERVER } from 'src/const/api/url';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { getLocalStorage } from 'src/logic/local-storage/local-storage';

class ApiWrapper {
  private baseUrl: string;

  private isBackEnd: boolean;

  constructor(baseUrl: string, isBackEnd: boolean) {
    this.baseUrl = baseUrl;
    this.isBackEnd = isBackEnd;
  }

  private async fetchWrapper<ResponseBody>(url: string, options: RequestInit) {
    const token: string | null = getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN);

    const headers = {
      //
      ...(token && this.isBackEnd
        ? // если есть токен и это бэк, добавляется заголовок Authorization
          { Authorization: token }
        : // иначе этот заголовок для API
          { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }),
      ...(options?.headers ?? {}),
    };

    const response = await fetch(url, {
      ...(options ?? {}),
      headers,
    });

    const data: ResponseBody = await response.json();

    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
      throw data as unknown as ErrorMessage;
    }

    return { data, response };
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
    } else {
      queryParams = Object.entries(options ?? {})
        .map(([param, value]) => `${param}=${String(value)}`)
        .join('&');
    }

    const queryString = queryParams && `?${queryParams}`;
    return `${this.baseUrl}/${endpoint}${queryString}`;
  }

  async get<ResponseBody>(endpoint: string, options?: RequestData | RequestData[]) {
    const url: string = this.makeUrl(endpoint, options);

    return await this.fetchWrapper<ResponseBody>(url, {
      method: METHODS.GET,
    });
  }

  async post<RequestBody, ResponseBody>(endpoint: string, body: RequestBody, options?: RequestInit, isFile?: boolean) {
    const url: string = this.makeUrl(endpoint);

    const headers = {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    };

    return await this.fetchWrapper<ResponseBody>(url, {
      ...(options ?? {}),
      body: isFile ? (body as unknown as FormData) : JSON.stringify(body),
      // если передаем файл, то не делаем JSON.stringify и не передаем заголовки
      headers: isFile ? {} : headers,
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

export const apiCall = new ApiWrapper(BASE_URL, false);
export const backCall = new ApiWrapper(URL_SERVER, true);
