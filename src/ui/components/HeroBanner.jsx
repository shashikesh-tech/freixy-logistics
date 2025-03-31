import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative flex h-screen bg-[url('/world-map.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-7xl w-full">
        <Navbar />
        <div className="flex items-center justify-between gap-0 lg:gap-6">
          <div className="left-side max-w-2xl w-full">
            <h1 className="text-white text-5xl font-bold leading-none">
              Your Lightning{" "}
              <div className="font-poppins">Fast Delivery Partner</div>
            </h1>
            <p className="text-white text-lg my-4 lg:my-8">
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
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
