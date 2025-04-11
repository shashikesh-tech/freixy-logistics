const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function CommonHeading({
  heading,
  subHeading,
  textAlign = "center",
}) {
  const alignClass = textAlignClasses[textAlign] || "text-center";
  return (
    <>
      <h2 className={`${alignClass} text-3xl font-bold text-[#001d30cc]`}>
        {heading}
      </h2>
      <p className={`${alignClass} text-lg leading-snug mt-2`}>{subHeading}</p>
    </>
  );
}
