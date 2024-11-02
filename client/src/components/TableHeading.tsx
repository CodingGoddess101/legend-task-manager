import Props from "./ComponentProps";
const TableHeading = ({ class_name, text }: Props) => {
  return <th className={`${class_name}`}>{text}</th>;
};

export default TableHeading;
