const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function httpClient() {
  async function get<R>(url: string, params?: Record<string, any>) {
    const urlParams = new URLSearchParams(params);
    const response = await fetch(BASE_URL + url + urlParams.toString());
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

  async function postFormData(url: string, data: FormData) {
    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMWI1ZjMyNyIsImlhdCI6MTcxOTA3NTk4MywiZXhwIjoxNzE5MDk3NTgzfQ.dumJ26XP1JbsbL8GLx9gEKjO4HLQuWTsjI3JM226TbY",
      },
      body: data,
    });

    return response;
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
    postFormData,
    put,
    delete: del,
  };
}

export default httpClient;
