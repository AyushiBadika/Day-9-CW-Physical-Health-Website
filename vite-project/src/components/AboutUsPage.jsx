import aboutImage from "../assets/about-img.webp";
export default function AboutUsPage() {
  return (
    <div className="flex p-20 gap-12">
      <img src={aboutImage} alt="" />
      <div>
        <p className="text-2xl font-bold text-blue-600 mb-4">About Us</p>
        <p className="text-6xl font-bold mt-14">
          We Are Ready To Making You In A Shape
        </p>
        <p className="text-xl mt-8">
          Finding motivation to work out can be challenging. There are so many
          distractions and less physically demanding alternatives to spending an
          hour at the gym or working out at home.
        </p>
        <p className="text-xl mt-8">
          You need to understand that Strength does not come from physical
          capacity. It comes from an indomitable will.
        </p>
        <button className="mt-8 border-2 px-8 py-4 rounded-3xl bg-blue-600 text-white font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
}
