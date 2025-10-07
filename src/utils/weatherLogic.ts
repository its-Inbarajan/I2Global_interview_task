import { News } from "@/context/location-context";

export function filterNewsByWeather(weather: string, news: News[]) {
  const w = weather.toLowerCase();
  if (w.includes("cold"))
    return news.filter(
      (n) =>
        n.title.toLowerCase().includes("death") ||
        n.title.toLowerCase().includes("loss")
    );
  if (w.includes("hot"))
    return news.filter((n) => n.title.toLowerCase().includes("fear"));
  if (w.includes("cool"))
    return news.filter(
      (n) =>
        n.title.toLowerCase().includes("win") ||
        n.title.toLowerCase().includes("happy")
    );

  console.log("new", news);
  return news;
}
