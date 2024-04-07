import { BASE_URL } from "../../constants/url.constant";

export interface User {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export const getUser = async (userId: number): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error(`error Status:
            ${response.status}`);
    }
    const { data } = await response.json();
    return data[0];
  } catch (e: any) {
    throw new Error("데이터 불러오기 실패");
  }
};
