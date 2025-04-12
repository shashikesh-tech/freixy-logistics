const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};
const textColorClasses = {
  primary: "#d53503",
  secondary: "#3e3d3d",
  default: "#ffffff",
};

export default function CommonHeading({
  heading,
  subHeading,
  textAlign = "center",
  color = "primary",
}) {
  const alignClass = textAlignClasses[textAlign] || "text-center";
  const colorClass = textColorClasses[color] || "text-secondary";
  return (
    <>
      <h2
        className={`${alignClass} text-3xl font-bold`}
        style={{ color: colorClass }}
      >
        {heading}
      </h2>
      <p
        className={`${alignClass} text-lg leading-snug mt-2`}
        style={{ color: colorClass }}
      >
        {subHeading}
      </p>
    </>
  );
}
