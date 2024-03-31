export const ALL_MENU_URL = "https://bootcamp-api.codeit.kr/api/users/4/links";

export const BASE_URL = "https://bootcamp-api.codeit.kr/api";
export const BASE_USERS_URL = `${BASE_URL}/users`;
export const BASE_SAMPLE_URL = `${BASE_URL}/sample`;

export const API_PATHS = {
  USERS: {
    USER: "1",
    SORTED_ALL_MENU: "4/folders",
    ALL_MENU: "4/links",
  },
  SAMPLE: {
    USER: "user",
    FOLDER: "folder",
  },
};

export const USER_API_URL = {
  USER: `${BASE_USERS_URL}/${API_PATHS.USERS.USER}`,
  SORTED_ALL_MENU: `${BASE_USERS_URL}/${API_PATHS.USERS.SORTED_ALL_MENU}`,
  ALL_MENU: `${BASE_USERS_URL}/${API_PATHS.USERS.ALL_MENU}`,
};

export const SAMPLE_API_URL = {
  USER: `${BASE_SAMPLE_URL}/${API_PATHS.SAMPLE.USER}`,
  FOLDER: `${BASE_SAMPLE_URL}/${API_PATHS.SAMPLE.FOLDER}`,
};
