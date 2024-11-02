import Props from "./ComponentProps";
const TableRow = ({ class_name, children }: Props) => {
  return <tr className={`${class_name}`}>{children}</tr>;
};

export default TableRow;
