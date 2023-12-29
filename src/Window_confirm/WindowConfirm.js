import { useEffect, useState } from "react";
import "./style.css";
function WindowConfirm() {
  const [modalactive, setModalactive] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);

  const { ConfirmDialog, triggerConfirm } = useConfirm();
  const showmodal = async () => {
    const deleteMessage = triggerConfirm("hiii");
    setDeleteMessage(deleteMessage);
  };

  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="appheading mb-5">Window Confirm 🪟</h1>
          <hr></hr>
          <p>hit delete button to delete this text</p>
          <button className="btn btn-danger" onClick={showmodal}>
            delete
          </button>
          <p>{deleteMessage ? "deleted" : "delete this?"}</p>
          {<ConfirmDialog />}
        </div>
      </div>
    </div>
  );
}

function useConfirm() {
  const [modalopen, setModalopen] = useState(false);
  const [confirmtextstate, setConfirmtextstate] = useState("");
  const [userinput, setUserinput] = useState("");

  function clickcomfirm(anstext) {
    setUserinput(anstext);
    setModalopen(false);
  }
  function triggerConfirm(confirmtext) {
    setModalopen(true);
    setConfirmtextstate(confirmtext);
    console.log(confirmtext);
    return userinput;
  }

  function ConfirmDialog() {
    return (
      modalopen && (
        <div className="confirm_modal text-center justify-content-center">
          <h5 className="mb-4">{confirmtextstate} </h5>
          <button className="btn btn-primary mx-2" onClick={() => clickcomfirm(true)}>
            yes
          </button>
          <button className="btn btn-warning mx-2" onClick={() => clickcomfirm(false)}>
            no
          </button>
        </div>
      )
    );
  }

  return { ConfirmDialog, triggerConfirm };
}

export default WindowConfirm;
