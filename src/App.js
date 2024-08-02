import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "These chairs are assembled because of a huge gathering of People around the ground for Political Jalsa."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "You have to return my chair within week because there is gathering of my relatives in which chairs are needed urgently"
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Off course I would like to ship countries than the Europe, And i would love to Enjoy the other countries to explore the world !"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />)}

    </div>
  );
}

function AccordionItem({ title, text, num }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}