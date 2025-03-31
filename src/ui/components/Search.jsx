export default function FunctionName() {
  return (
    <div className="group search px-4 py-3 lg:mt-10 rounded-2xl bg-white text-gray-900 flex justify-between border-2 border-transparent transition-all duration-300 ease-in-out focus-within:border-[#d53503] shadow-md focus-within:shadow-lg">
      <input
        type="text"
        className="flex-1 focus:outline-none text-lg"
        placeholder="Enter you airway bill number (AWB)"
      />
      <button
        type="submit"
        className="bg-[#d53503] text-white cursor-pointer px-6 py-3 rounded-lg text-lg font-bold"
      >
        Submit
      </button>
    </div>
  );
}
