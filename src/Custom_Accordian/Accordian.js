import { useState } from "react";
function Accordian({ data }) {
  const [activequest, setActivequest] = useState(1);
  return (
    <div className="accordian_container">
      {data.map((item) => (
        <Singlequest itemobj={item} key={item.id} activequest={activequest} setActivequest={setActivequest} />
      ))}
    </div>
  );
}
function Singlequest({ itemobj, setActivequest, activequest }) {
  function handleaccordian(itemid) {
    setActivequest(activequest === itemid ? " " : itemid);
  }
  return (
    <div className="singlequest">
      <div className="quest_box" onClick={() => handleaccordian(itemobj.id)}>
        <span>{itemobj.question}</span> <span>{activequest === itemobj.id ? "-" : "+"}</span>
      </div>
      {console.log(activequest)}
      <div className={activequest === itemobj.id ? "ans_box" : "ans_box close"}>
        <p>{itemobj.answer}</p>
      </div>
    </div>
  );
}

export default Accordian;
