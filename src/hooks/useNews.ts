import axios from "axios";

export async function getNews(location: string) {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${location}&apiKey=${apiKey}`
    );
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
