import { api } from "./baseUrl";

export const GetDataBook = async (arg) => {
  try {
    const books = await api.get(arg);
    return books.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
