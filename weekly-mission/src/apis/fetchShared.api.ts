import React from "react";

export const useFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error Status: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error: any) {
    throw new Error("데이터 불러오기 실패");
  }
};

// export const useUserFetch = async (url: string) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`error Status: ${response.status}`);
//     }
//     const body = await response.json();
//     return body;
//   } catch (error: any) {
//     throw new Error("데이터 불러오기 실패");
//   }
// };
