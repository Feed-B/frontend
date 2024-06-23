const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function httpClient() {
  async function get<R>(url: string, params?: Record<string, any>, headers?: HeadersInit) {
    const urlParams = new URLSearchParams(params).toString();
    const response = await fetch(`${BASE_URL}${url}?${urlParams}`, {
      headers,
    });
    const result: R = await response.json();
    return result;
  }

  async function post<T, P>(url: string, data: P, headers: HeadersInit = { "Content-Type": "application/json" }) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const result: T = await response.json();
    return result;
  }

  async function postFormData(url: string, data: FormData, headers: HeadersInit) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers,
      body: data,
    });

    return response;
  }

  async function put<T, P>(url: string, data: P, headers: HeadersInit = { "Content-Type": "application/json" }) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(data),
    });

    const result: T = await response.json();
    return result;
  }

  async function del<T>(url: string, headers?: HeadersInit) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers,
    });

    const result: T = await response.json();
    return result;
  }

  return {
    get,
    post,
    postFormData,
    put,
    delete: del,
  };
}

export default httpClient;
