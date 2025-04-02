export default function CommonHeading({ heading, subHeading }) {
  return (
    <>
      <h2 className="text-center text-3xl font-bold text-[#001d30cc]">
        {heading}
      </h2>
      <p className="text-center text-lg leading-snug px-0 lg:px-10">
        {subHeading}
      </p>
    </>
  );
}
