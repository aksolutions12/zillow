import img1 from "../../../../../assets/images/realestate.jpg";
import img2 from "../../../../../assets/images/family_on_computer.png";
import img3 from "../../../../../assets/images/off.jpg";
import in1 from "../../../../../assets/images/inc1.png";
import in2 from "../../../../../assets/images/inc2.png";
import RightImageSection from "../../Components/RightImageSection";
import LeftImageSection from "../../Components/LeftImageSection";
export default function ReadMoreIncluded() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 pt-16">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Read more about pay-per-lease advertising
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img1}
              alt="Pay-Per-Lease Advertising"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">
                Pay-Per-Lease Advertising Is a Holistic Solution for This
                Property Firm
              </h3>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img2}
              alt="Zillow Lease Connect"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">
                Zillow Lease Connect Delivers Leads With Pay-Per-Lease
                Advertising
              </h3>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img3}
              alt="Busting Common Myths"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">
                Busting Common Myths About Pay-Per-Lease Advertising
              </h3>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center px-10 py-12 ">
        <div className="flex items-center text-center">
          <h1 className="font-bold text-3xl text-center pb-8">
            Learn more about Zillow Rent Connect
          </h1>
        </div>

        <RightImageSection
          title="Enhanced package"
          description="Along with everything in the Base package, you’ll receive sponsored ad placement. Listings feature your portfolio of nearby properties, as well as a prominent link to your property website. Stay on top of the market with rent comp and insight reports."
          buttonText="Sign in "
          buttonLink="#"
          imageUrl={in1}
          imageAlt="Maple Apartments"
        />

        <LeftImageSection
          title="Base package"
          description="Fill vacancies by capturing the attention of high-intent renters across our entire rental network. You’ll be able to customize your listings, which will appear with a verified source badge to improve credibility among renters."
          buttonText="Learn More"
          buttonLink="#"
          imageUrl={in2}
          imageAlt="Maple Apartments"
        />
      </div>
    </div>
  );
}
