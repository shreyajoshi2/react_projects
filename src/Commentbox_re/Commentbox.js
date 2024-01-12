import { useEffect, useState } from "react";
import "./style.css";
const initialdata = [
  {
    id: 1,
    comment: "wow this is great",
    reply: [
      {
        id: 11,
        comment: "yes it is!",
        reply: [
          {
            id: 121,
            comment: "yes it is!",
            reply: [],
          },
        ],
      },
      {
        id: 12,
        comment: "np shutup",
        reply: [],
      },
    ],
  },
  {
    id: 2,
    comment: "i dint like that thouh",
    reply: [
      {
        id: 21,
        comment: "yes it is!",
        reply: [],
      },
      {
        id: 22,
        comment: "np shutup",
        reply: [],
      },
    ],
  },
];
function Commentbox() {
  const [allcomments, setAllComment] = useState(initialdata);

  const handleaddcomment = (currentcomment, commentboxid) => {
    const temparray = {
      id: Math.random(),
      comment: currentcomment,
      reply: [],
    };
    commentboxid == 0
      ? setAllComment([...allcomments, temparray])
      : setAllComment(
          allcomments.find((item) => {
            if (item === commentboxid) {
              console.log(item);
              console.log(item.id);
              item.reply = [...item.reply, temparray];
            }
            return item;
          })
        );
  };
  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="appheading mb-5">Comment Box 🎹</h1>
          <hr></hr>
          <Commentform handleaddcomment={handleaddcomment} commentboxid="0" key="0" />
          {allcomments?.map((item) => (
            <Singlecomment itemobj={item} key={item.id} handleaddcomment={handleaddcomment} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Commentform({ handleaddcomment, commentboxid }) {
  const [currentcomment, setCurrentcomment] = useState("");
  const handlecurrentcomment = (commenttext) => {
    setCurrentcomment(commenttext);
  };

  return (
    <div className="text-end">
      <textarea className="textarea" value={currentcomment} onChange={(e) => handlecurrentcomment(e.target.value)}></textarea>
      <button onClick={() => handleaddcomment(currentcomment, commentboxid)}>comment</button>
    </div>
  );
}
function Singlecomment({ itemobj, handleaddcomment }) {
  const [showreplyform, setShowreplyform] = useState(false);
  const handleshowreplyform = () => {
    setShowreplyform(!showreplyform);
  };
  return (
    <div className="row commentbox">
      <div className="col-lg-12 text-start  p-0">
        <div className="singlecomment">
          <h5 className="text-start">{itemobj.comment}</h5>

          <button className="btn" onClick={handleshowreplyform}>
            reply
          </button>
        </div>

        {showreplyform ? <Commentform handleaddcomment={handleaddcomment} commentboxid={itemobj.id} key={itemobj.id} /> : ""}
        <div className="replybox">{itemobj.reply ? itemobj.reply?.map((item) => <Singlecomment itemobj={item} key={item.id} handleaddcomment={handleaddcomment} />) : "no"}</div>
      </div>
    </div>
  );
}

export default Commentbox;
