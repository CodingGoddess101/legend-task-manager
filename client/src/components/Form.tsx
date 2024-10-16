import Props from "./ComponentProps";
const Form = ({ children }: Props) => {
  return <form className="form">{children}</form>;
};

export default Form;
