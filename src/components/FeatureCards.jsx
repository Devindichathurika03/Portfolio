import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
      {abilities.map(({ img, title, desc }) => (
        <div
  key={title}
  className="rounded-xl p-6 flex flex-col gap-3
             border border-white/10
             bg-white/5
             hover:border-purple-500/40
             hover:bg-white/10
             transition-all duration-300"
>

          <div className="size-12 flex items-center justify-center rounded-full">
            <img src={img} alt={title} />
          </div>

          <h2 className="text-white text-xl font-semibold mt-2">
            {title}
          </h2>

          <p className="text-white-50 text-sm">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
