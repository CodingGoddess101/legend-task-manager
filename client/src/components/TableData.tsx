import Props from "./ComponentProps";
const TableData = ({ class_name, children }: Props) => {
  return <td className={`${class_name}`}>{children}</td>;
};

export default TableData;
