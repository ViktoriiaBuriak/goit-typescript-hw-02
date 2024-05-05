import axios from "axios";

interface ApiResponse<T> {
  results: T;
  total_pages: number;
}

const accessKey = "f0Irhzk_8qim5aX5lpdVEIz_86f1C37nGvtiT5xyDAY";

const response = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestImagesByQuery = async <T>(
  query: string = "",
  page: number = 1
): Promise<ApiResponse<T>> => {
  const perPage = 15;
  const { data } = await response.get(
    `/search/photos/?client_id=${accessKey}&query=${query}&per_page=${perPage}&page=${page}`
  );
  return {
    results: data.results,
    total_pages: data.total_pages,
  };
};
