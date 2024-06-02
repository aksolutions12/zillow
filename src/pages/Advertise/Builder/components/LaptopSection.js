import laptopImage from "../../../../assets/images/Laptop_2020-cef1de-9e273a.png";

export default function LaptopSection() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
        Don’t just list. Showcase.
      </h2>
      <p className="text-base text-gray-700 mb-8">
        Display your homes on Promoted Communities, Zillow’s exclusive new homes
        marketing platform.
      </p>
      <img src={laptopImage} alt="Laptop" className="mx-auto w-3/4" />
    </div>
  );
}
