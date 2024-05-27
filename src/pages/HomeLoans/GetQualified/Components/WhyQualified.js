import { BiCommentDots } from "react-icons/bi";
export default function WhyQualified() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-2xl mx-auto p-4 bg-white">
        <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-6">
          Why get pre-qualified?
        </h2>
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
            </div>
            <h3 className="font-bold text-zinc-800 dark:text-zinc-200">
              Know what's in your budget
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Shop with confidence knowing that you pre-qualify for a home loan.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
            </div>
            <h3 className="font-bold text-zinc-800 dark:text-zinc-200">
              Reach your financing goals
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Get connected with certified loan officers at Zillow Home Loans or
              from Zillow's network of lenders to answer your questions.
            </p>
          </div>
        </div>
        <div className=" flex  items-center justify-center mt-8 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg gap-3">
          <BiCommentDots size={40} color="blue" />
          <div>
            <p className="font-bold text-zinc-800 dark:text-zinc-200">
              Questions?{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Frequently Asked Questions
              </a>{" "}
              <br />
              or give us a call at{" "}
              <a
                href="tel:8339242739"
                className="text-blue-600 dark:text-blue-400 font-bold"
              >
                (833) 924-2739
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
