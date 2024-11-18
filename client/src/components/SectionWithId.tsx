import Props from "./ComponentProps";
const SectionWithId = ({ id, class_name, children }: Props) => {
  return (
    <section id={`${id}`} className={`${class_name}`}>
      {children}
    </section>
  );
};

export default SectionWithId;
