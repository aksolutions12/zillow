import img1 from "../../../../assets/images/tenant-lap.png";
import img2 from "../../../../assets/images/tenant-prof.png";
import img3 from "../../../../assets/images/tenant-prof2.png";
import img4 from "../../../../assets/images/inc4.jpg";
export default function ApproveSection() {
  return (
    <div className="bg-white dark:bg-zinc-800 p-8">
      {" "}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
        {/* Image */}
        <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
          <img
            src={img4}
            alt="Image 2"
            className="w-full   object-cover rounded-lg "
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Drive traffic to the right places
          </h2>
          <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
            Direct renters in pre-selected cities to your website or Zillow
            listing.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl font-bold mb-8 text-black dark:text-white">
          Accept, review and approve applications in minutes
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src={img1}
              alt="Laptop illustration"
              className="mb-4 h-24 w-24"
            />
            <p className="text-black dark:text-white max-w-xs">
              Renters can apply from your listing if you choose, or you can send
              a private application link.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src={img2}
              alt="Application illustration"
              className="mb-4 h-24 w-24"
            />
            <p className="text-black dark:text-white max-w-xs">
              You receive their application, including a background check,
              credit report, eviction history and income verification.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={img3}
              alt="Notification illustration"
              className="mb-4 h-24 w-24"
            />
            <p className="text-black dark:text-white max-w-xs">
              You get alerted when an application is ready to review — and can
              accept it in one click.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
