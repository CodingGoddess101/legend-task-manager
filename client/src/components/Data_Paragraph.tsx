import Props from "./ComponentProps";
const Data_Paragraph = ({ id, class_name, text }: Props) => {
  return (
    <p id={`${id}`} className={`${class_name}`}>
      {text}
    </p>
  );
};

export default Data_Paragraph;
