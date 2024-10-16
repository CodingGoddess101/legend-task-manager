import { Link } from "react-router-dom";
import Props from "./ComponentProps";
const Route = ({ class_name, to, text }: Props) => {
  return (
    <Link className={`${class_name}`} to={`${to}`}>
      {text}
    </Link>
  );
};

export default Route;
