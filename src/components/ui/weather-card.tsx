export default function WeatherCard() {
  return (
    <section className="bg-[#f5b342] mt-6 p-4 rounded-2xl shadow">
      <h2 className="text-white text-lg font-semibold mb-3">
        🌤 24-hour forecast
      </h2>
      <div className="flex justify-between items-end text-white">
        {[26, 22, 16, 20, 22, 16].map((t, i) => (
          <div key={i} className="flex flex-col items-center">
            <p className="text-sm">{t}°</p>
            <div className="h-10 w-[2px] bg-white/40 mt-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
