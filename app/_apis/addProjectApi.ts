import httpClient from "./httpClient";

export const addProjectApi = {
  postProject: async (projectData: FormData) => {
    return await httpClient().postFormData("/projects", projectData, headers);
  },
};

// 임시 headers
export const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OTNhNmEyMSIsImlhdCI6MTcxOTE0NDQ5NiwiZXhwIjoxNzE5MTY2MDk2fQ.7XwJLTQmT0G0nJMwEDg8zg69JSMeeayo8FxFf3COjVo",
};
