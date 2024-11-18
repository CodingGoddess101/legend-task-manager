import Props from "./ComponentProps";
const DataParagraph = ({ id, class_name, text }: Props) => {
  return (
    <p id={`${id}`} className={`${class_name}`}>
      {text}
    </p>
  );
};

export default DataParagraph;
