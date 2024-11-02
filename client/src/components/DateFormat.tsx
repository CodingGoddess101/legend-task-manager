import Props from "./ComponentProps";

interface PropsDateFormatter extends Props {
  locale?: string;
}
const DateFormat = ({ class_name, children, locale }: PropsDateFormatter) => {
  const newDateValue =
    typeof children === "string" || typeof children === "number"
      ? new Date(children)
      : "Not Applicable";

  const formattedDate = new Date(newDateValue).toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return <span className={`${class_name}`}> {formattedDate}</span>;
};

export default DateFormat;
