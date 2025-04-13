import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <header
      className="relative flex h-full bg-[#001d30] bg-cover bg-bottom bg-no-repeat py-4 mb-4"
      style={{
        backgroundImage:
          "linear-gradient(to right, #001d30cc, #001d30cc), url('/world-map.png')",
      }}
    >
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-4">
        <Navbar />
        <div className="flex items-center justify-between gap-0 lg:gap-8">
          <div className="left-side max-w-2xl w-full">
            <h1 className="text-white text-5xl font-bold leading-14">
              Your Lightning{" "}
              <div className="font-poppins">Fast Delivery Partner</div>
            </h1>
            <p className="text-white text-xl my-4 lg:my-8 lg:text-base/6">
              Facere distinctio molestiae nisi fugit tenetur repellat non
              praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
              reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
              occaecati odio est possimus vel reprehenderit
            </p>
            <Search />
          </div>
          <div className="right-side">
            <Image
              src="/hero-img.svg"
              alt="Hero Image"
              width={200}
              height={200}
              className="w-full h-full bg-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
