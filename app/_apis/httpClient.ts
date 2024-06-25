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

  async function postData<P>(url: string, data: P, headers: HeadersInit = { "Content-Type": "application/json" }) {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    return response;
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

  async function del(url: string, headers?: HeadersInit) {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "DELETE",
        headers,
      });

      // 서버 응답이 성공적이지 않을 때 예외 던지기
      if (!response.ok) {
        const errorMessage = await response.text(); // 서버가 보낸 오류 메시지 가져오기
        throw new Error(errorMessage);
      }

      return response;
    } catch (error: any) {
      console.error("Error:", error);
      throw error; // 상위 호출자에게 예외 전달
    }
  }

  return {
    get,
    post,
    postData,
    postFormData,
    put,
    delete: del,
  };
}

export default httpClient;
