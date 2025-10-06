import Image from "next/image";

export default function ActivitiesCard() {
  return (
    <section className="bg-[#f5b342] p-4 rounded-2xl shadow">
      <h2 className="text-white text-lg font-semibold mb-3">
        ❤️ Activities in your area
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["2km", "1.5km", "3km", "500m"].map((d, i) => (
          <div key={i} className="bg-white/20 rounded-xl overflow-hidden">
            <Image
              src={`/next.svg`}
              className="w-full h-[100px] object-cover"
              alt=""
              width={10}
              height={10}
            />
            <p className="text-center text-sm py-2 text-white">{d} away</p>
          </div>
        ))}
      </div>
    </section>
  );
}
