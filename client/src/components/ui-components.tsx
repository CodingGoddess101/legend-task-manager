import HeaderStandard from "./headers/HeaderStandard.tsx";
import Footer from "./Footer.tsx";

import Section from "./Section.tsx";
import Div from "./Div.tsx";

import HeadingOne from "./HeadingOne.tsx";
import HeadingTwo from "./HeadingTwo.tsx";

import Paragraph from "./Paragraph.tsx";
import DataParagraph from "./DataParagraph.tsx";
import Button from "./Button.tsx";
import ButtonPDF from "./ButtonPDF.tsx";
import Route from "./Link.tsx";

import Form from "./Form.tsx";
import Label from "./Label.tsx";
import LabelText from "./LabelText.tsx";
import Select from "./Select.tsx";
import Option from "./Option.tsx";

import TableData from "./TableData.tsx";
import TableHeading from "./TableHeading.tsx";
import TableRow from "./TableRow.tsx";
import DateFormat from "./DateFormat.tsx";
import AuthHeaderLogout from "./headers/AuthHeaderLogout.tsx";
import AuthHeaderProfileAndLogout from "./headers/AuthHeaderProfileAndLogout.tsx";
import SectionWithId from "./SectionWithId.tsx";

const UI = {
  HeaderStandard,
  AuthHeaderLogout,
  AuthHeaderProfileAndLogout,
  Footer,

  //Date formatter
  DateFormat,
  //wrapper or container elements
  Section,
  SectionWithId,
  Div,

  //headings
  HeadingOne,
  HeadingTwo,

  //text, link, dropdowns and event elements
  Paragraph,
  DataParagraph,
  Button,
  ButtonPDF,
  Route,

  //form elements
  Form,
  LabelText,
  Label,
  Select,
  Option,
  //table components
  TableHeading,
  TableData,
  TableRow,
};

export default UI;
