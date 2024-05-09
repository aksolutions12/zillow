import OutlinedButton from "../../../components/Button/OutlinedButton";

export default function MoreQuestions() {
  return (
    <div className="bg-blue-950 text-white p-8 py-10 flex justify-center items-center">
      <div className="max-w-7xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          Have more questions about financing?
        </h1>
        <p className="text-base mb-6">
          Get pre-qualified and speak with a licensed loan officer or see the
          full list of financing steps in our article about the mortgage
          application process.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 w-72 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get pre-qualified
          </button>
          <OutlinedButton className=" w-72 text-white border border-white hover:bg-white  font-bold py-2 px-4 rounded transition duration-300">
            See the full list →
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
}
