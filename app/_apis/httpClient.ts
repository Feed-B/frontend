const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function httpClient() {
  async function get<R>(url: string, params?: Record<string, any>, headers?: any) {
    const urlParams = new URLSearchParams(params);
    const response = await fetch(BASE_URL + url + urlParams.toString(), {
      headers,
    });
    const result: R = await response.json();
    return result;
  }

  async function post<T, P>(url: string, data: P) {
    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: T = await response.json();
    return result;
  }

  async function put<T, P>(url: string, data: P) {
    const response = await fetch(BASE_URL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: T = await response.json();
    return result;
  }

  async function del<T>(url: string) {
    const response = await fetch(BASE_URL + url, {
      method: "DELETE",
    });

    const result: T = await response.json();
    return result;
  }

  return {
    get,
    post,
    put,
    delete: del,
  };
}

export default httpClient;
