import { useEffect, useState } from "react";
import "./style.css";
const commentsdata = [];
function Commentbox() {
  const [comments, setComments] = useState(commentsdata);
  function addcomment(tempreply) {
    setComments([...comments, tempreply]);
  }
  function handledeletecomment(id) {
    setComments(comments.filter((item) => item.id !== id));
  }

  function handleedit(id) {
    setComments(comments.map((item) => item.id === id ? item.commenttext == ""));
  }
  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="appheading mb-5">Comment Box 🎹</h1>
          <hr></hr>
          <Singlecomment addcomment={addcomment} />
          {comments.map((item) => (
            <Replybox item={item} handledeletecomment={handledeletecomment} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Singlecomment({ addcomment }) {
  const [commenttext, setCommenttext] = useState("");

  function handlecommentbox(e) {
    setCommenttext(e.target.value);
    e.preventDefault();
  }
  const handlecommentclick = () => {
    const tempreply = {
      id: Math.random(),
      commenttext: commenttext,
      reply: [],
    };

    addcomment(tempreply);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-lg-12 ">
        <div className="commentboxarea text-end">
          <textarea className="commentbox" value={commenttext} onChange={(e) => handlecommentbox(e)}></textarea>
          <button onClick={handlecommentclick}>comment</button>
        </div>
      </div>
    </div>
  );
}

function Replybox({ item, handledeletecomment, handleedit }) {
  const [edit, setEdit] = useState(false);
  const [reply, setreply] = useState(false);
  function handleeditcomment() {
    setEdit(!edit);
  }
  return (
    <div className="replyboxarea text-start">
      {edit ? (
        <div>
          <textarea className="commentbox">{item.commenttext}</textarea>
          <button onClick={() => handleedit(item.id)}>edit</button>
        </div>
      ) : (
        <p>{item.commenttext}</p>
      )}
      <button>reply</button> <button onClick={handleeditcomment}>Edit</button> <button onClick={() => handledeletecomment(item.id)}>delete</button>
    </div>
  );
}
export default Commentbox;
