import { useEffect, useState } from "react";
import "./style.css";
const todotask = [
  {
    id: 1,
    name: "Todo",
    task: [
      {
        id: 11,
        name: "To get my bag",
        description: "To get the bag from store",
      },
    ],
  },
];
function TodoList() {
  const [todolist, settodolist] = useState(todotask);

  function handleaddtasklist() {
    const tempaddtasklist = {
      id: Math.random(),
      name: "",
      task: [],
    };
    settodolist([...todolist, tempaddtasklist]);
  }

  function handlesavetasklistname(taskname, id) {
    settodolist(
      todolist.map((item) => {
        if (item.id === id) {
          item.name = taskname;
        }
        return item;
      })
    );
  }

  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="appheading mb-5">To DO list </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-11 todomain">
          <div className="row">
            <div className="col-lg-12 text-end">
              <button onClick={handleaddtasklist}>+ Add Task List</button>
            </div>
          </div>
          <div className="row">
            {todolist.map((item) => (
              <TodosingleList itemobj={item} key={item.id} handlesavetasklistname={handlesavetasklistname} settodolist={settodolist} todolist={todolist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TodosingleList({ itemobj, handlesavetasklistname, settodolist, todolist }) {
  const [tasklistname, setTasklistname] = useState(itemobj.name);
  const [addtodolist, setAddtodolist] = useState(true);
  const [todotask, setTodotask] = useState(itemobj.task);
  const [showtaskfrom, setShowtaskform] = useState(false);
  const [taskname, setTaskname] = useState("");
  const [taskdesc, setTaskdesc] = useState("");
  function handletaskform() {
    setShowtaskform(!showtaskfrom);
  }
  function handleaddtaskname(e) {
    console.log(e.target.value);
    e.preventDefault();
    setTaskname(e.target.value);
  }

  function handleaddtaskdesc(e) {
    console.log(e.target.value);
    e.preventDefault();
    setTaskdesc(e.target.value);
  }
  const handleaddtask = () => {
    const temptask = {
      id: Math.random(),
      name: taskname,
      description: taskdesc,
    };
    settodolist(
      todolist.map((item) => {
        if (item.id === itemobj.id) {
          item.task = [...item.task, temptask];
        }
        return item;
      })
    );
    setTodotask([...todotask, temptask]);

    setShowtaskform(false);
    setTaskname("");
    setTaskdesc("");
  };

  function handledeletetask(id) {
    console.log(todotask);
    settodolist(
      todolist.map((item) => {
        if (item.id === itemobj.id) {
          item.task.filter((item) => item.id !== itemobj.id);
        }
        return item;
      })
    );
    setTodotask(todotask.filter((item) => item.id !== id));
  }

  function editthetask(editedtaskname, editedtaskdesc, itemid) {
    setTodotask(
      todotask.map((item) => {
        if (item.id === itemid) {
          item.name = editedtaskname;
          item.description = editedtaskdesc;
        }
        return item;
      })
    );
  }

  function handletasklistname(e) {
    setTasklistname(e.target.value);
  }

  return (
    <div className="col-lg-3 singletodolist mx-2">
      {itemobj.name === "" ? (
        <div>
          <input type="text" value={tasklistname} onChange={(e) => handletasklistname(e)}></input>
          <button onClick={() => handlesavetasklistname(tasklistname, itemobj.id)}>save</button>
        </div>
      ) : (
        <h4>{itemobj.name} </h4>
      )}

      <button className="btn btn-primary" onClick={handletaskform}>
        {showtaskfrom ? "- Cancel" : "+ Add task"}
      </button>

      {showtaskfrom ? (
        <div>
          Name: <input type="text" value={taskname} onChange={(e) => handleaddtaskname(e)}></input>
          Description:
          <textarea value={taskdesc} onChange={(e) => handleaddtaskdesc(e)}></textarea>
          <button onClick={handleaddtask}>add task</button>
        </div>
      ) : (
        ""
      )}

      <div>
        <hr></hr>
        {todotask.map((item) => (
          <TodosingleTask itemobj={item} key={item.id} handledeletetask={handledeletetask} editthetask={editthetask} />
        ))}
      </div>
    </div>
  );
}

function TodosingleTask({ itemobj, handledeletetask, editthetask }) {
  const [edittaskname, setTasknameedit] = useState(itemobj.name);
  const [edittaskdesc, setTaskdescedit] = useState(itemobj.description);
  const [taskonedit, setTaskonedit] = useState(false);
  function handleedittaskname(e) {
    console.log(e.target.value);
    e.preventDefault();
    setTasknameedit(e.target.value);
  }

  function handleedittaskdesc(e) {
    console.log(e.target.value);
    e.preventDefault();
    setTaskdescedit(e.target.value);
  }
  const handleedittask = () => {
    setTaskonedit(!taskonedit);
  };
  const handlesaveedit = () => {
    console.log(itemobj.id);
    editthetask(edittaskname, edittaskdesc, itemobj.id);
    setTaskonedit(false);
  };
  return (
    <div className="row singletask mt-2">
      <div className="col-lg-12 text-start">
        <div className="text-end">
          <button className="btn" onClick={handleedittask}>
            ✏️
          </button>
          <button className="btn" onClick={() => handledeletetask(itemobj.id)}>
            ❌
          </button>
          {taskonedit ? (
            <div className="text-start">
              <input type="text" value={edittaskname} onChange={(e) => handleedittaskname(e)}></input>
              <textarea value={edittaskdesc} onChange={(e) => handleedittaskdesc(e)}></textarea>
              <button onClick={handlesaveedit}>save</button>
            </div>
          ) : (
            <div className="text-start">
              <h6>{itemobj.name}</h6>
              <p>{itemobj.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
