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
      throw new Error(`error Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data[0];
  } catch (e: any) {
    throw new Error("데이터 불러오기 실패");
  }
};

// {
//   "data": [
//       {
//           "id": 2,
//           "created_at": "2023-06-04T13:53:39.344306+00:00",
//           "name": "앤디",
//           "image_source": "https://ca.slack-edge.com/T04T2BTF4F5-U04USNXHRPX-ge090b709553-512",
//           "email": "tlsalsrb990713@gmail.com",
//           "auth_id": "86ebf397-f386-4a93-8385-74e35c6eb041"
//       }
//   ]
// }
