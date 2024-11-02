import Props from "./ComponentProps";
const Button_PDF = ({ class_name, onClick, text }: Props) => {
  return (
    <button className={`${class_name}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button_PDF;
