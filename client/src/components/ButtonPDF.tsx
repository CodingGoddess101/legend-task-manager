import Props from "./ComponentProps";
const ButtonPDF = ({ class_name, onClick, text }: Props) => {
  return (
    <button className={`${class_name}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonPDF;
