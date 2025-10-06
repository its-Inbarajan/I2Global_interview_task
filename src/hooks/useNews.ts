import axios from "axios";

export async function getNews() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    if (response.statusText !== "OK") {
      throw new Error("something went wrong!");
    }

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
