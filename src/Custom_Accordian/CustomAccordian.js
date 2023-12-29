import "./style.css";
import Accordian from "./Accordian";
const data = [
  {
    id: 1,
    question: "Explain what is JSON objects?",
    answer: "An object can be defined as an unordered set of name/value pairs.  An object in JSON starts with {left brace} and finish or ends with {right brace}.  Every name is followed by: (colon) and the name/value pairs are parted by, (comma).",
  },
  {
    id: 2,
    question: "Explain how to transform JSON text to a JavaScript object?",
    answer: "One of the common use of JSON is to collect JSON data from a web server as a file or HTTP request, and convert the JSON data to a JavaScript, ant then it avails the data in a web page.",
  },
  {
    id: 3,
    question: "Mention what is JSON?",
    answer: "JSON is a simple data exchange format.  JSON means JavaScript Object Notation; it is language and platform independent.",
  },
];
function CustomAccordian() {
  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="appheading mb-5">Custom Accordian 🪗</h1>
          <hr></hr>
          <Accordian data={data} />
          <CustomAccordiantwo />
        </div>
      </div>
    </div>
  );
}

const datatwo = [
  {
    id: 1,
    question: "Explain what is JSON objects?",
    answer: "An object can be defined as an unordered set of name/value pairs.  An object in JSON starts with {left brace} and finish or ends with {right brace}.  Every name is followed by: (colon) and the name/value pairs are parted by, (comma).",
  },
  {
    id: 2,
    question: "Explain how to transform JSON text to a JavaScript object?",
    answer: "One of the common use of JSON is to collect JSON data from a web server as a file or HTTP request, and convert the JSON data to a JavaScript, ant then it avails the data in a web page.",
  },
  {
    id: 3,
    question: "Mention what is JSON?",
    answer: "JSON is a simple data exchange format.  JSON means JavaScript Object Notation; it is language and platform independent.",
  },

  {
    id: 4,
    question: "Mention what is JSON?",
    answer: "JSON is a simple data exchange format.  JSON means JavaScript Object Notation; it is language and platform independent.",
  },
];

function CustomAccordiantwo() {
  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <p>Second accordian with different data</p>
          <Accordian data={datatwo} />
        </div>
      </div>
    </div>
  );
}

export default CustomAccordian;
