import Link from "next/link";
export default function FunctionName() {
  return (
    <nav className="flex gap-3 justify-between items-center py-3">
      <div className="text-[#d53503]">
        <Link href="#" className="text-4xl font-bold">
          Fre<span className="text-white hover:text-[#d53503]">ixy</span>
        </Link>
      </div>
      <ul className="flex gap-3 lg:gap-8">
        {["Home", "About", "Pricing"].map((item) => (
          <li className="px-2" key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-[#d53503]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-3 lg:gap-6">
        {["Login", "Signup for free"].map((item) => (
          <li key={item}>
            <button className="text-white cursor-pointer hover:text-[#d53503]">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
