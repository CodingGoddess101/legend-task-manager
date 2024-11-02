import Header_Standard from "./headers/Header_Standard.tsx";
import Footer from "./Footer.tsx";

import Section from "./Section.tsx";
import Div from "./Div.tsx";

import Heading_One from "./Heading_One.tsx";
import Heading_Two from "./Heading_Two.tsx";

import Paragraph from "./Paragraph.tsx";
import Data_Paragraph from "./Data_Paragraph.tsx";
import Button from "./Button.tsx";
import Button_PDF from "./Button_PDF.tsx";
import Route from "./Link.tsx";

import Form from "./Form.tsx";
import Label from "./Label.tsx";
import Label_Text from "./Label_Text.tsx";
import Select from "./Select.tsx";
import Option from "./Option.tsx";

import TableData from "./TableData.tsx";
import TableHeading from "./TableHeading.tsx";
import TableRow from "./TableRow.tsx";
import DateFormat from "./DateFormat.tsx";
import Auth_Header_Logout from "./headers/Auth_Header_Logout.tsx";
import Auth_Header_Profile_And_Logout from "./headers/Auth_Header_Profile_And_Logout.tsx";
import Section_With_Id from "./Section_With_Id.tsx";

const UI = {
  Header_Standard,
  Auth_Header_Logout,
  Auth_Header_Profile_And_Logout,
  Footer,

  //Date formatter
  DateFormat,
  //wrapper or container elements
  Section,
  Section_With_Id,
  Div,

  //headings
  Heading_One,
  Heading_Two,

  //text, link, dropdowns and event elements
  Paragraph,
  Data_Paragraph,
  Button,
  Button_PDF,
  Route,

  //form elements
  Form,
  Label_Text,
  Label,
  Select,
  Option,
  //table components
  TableHeading,
  TableData,
  TableRow,
};

export default UI;
