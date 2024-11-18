import { ReactNode } from "react";

interface Props {
    id?: string;
    class_name?: string;
    text?: string;
    to?:string;
    key?: number;
    name?:string;
    onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=> void;
    value?: string | number;
    onClick?:()=> void;
    linkText?:string;
    htmlFor?:string;
    required?:boolean,
    children?: ReactNode;
}

export default Props;