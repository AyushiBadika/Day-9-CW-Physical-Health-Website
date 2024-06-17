// import headerAccents from "../assets/header-accents.svg";
// import heroAdjustment from "../assets/hero-adjustments.svg";
import bannerImage from "../assets/banner-img.webp";
import header from "../assets/header.svg";
export default function FitnessHomePage() {
  return (
    <div className="">
      <div className="flex justify-between px-20 py-12 ">
        <h1 className="text-5xl text-blue-600 font-bold">Fitness</h1>
        <button className="border-2 px-8 py-4 rounded-3xl bg-blue-600 text-white font-bold">
          Stay Strong
        </button>
      </div>

      <div className="flex w-full justify-between px-20 py-12">
        <div className="w-3/5 ">
          <div className="relative mb-20">
            <h1 className="text-7xl font-bold">
              One step towards a healthy lifestyle
            </h1>
            <img src={header} className="absolute right-48 mt-3 " />
          </div>
          <p className="text-2xl ">
            Healthy body is the secret of a healthy lifestyle. Start your day
            with <span className="font-bold">Fitness.</span>
          </p>
          <div className="flex gap-8 mt-8">
            <button className="border-2 px-8 py-4 rounded-3xl bg-blue-600 text-white font-bold">
              Stay Connected
            </button>
            <button className="border-2 px-8 py-4 rounded-3xl border-blue-600 text-blue-600 font-bold">
              Stay Strong
            </button>
          </div>
        </div>
        <img src={bannerImage} alt="" className="w-2/5 ml-10" />
      </div>
    </div>
  );
}
