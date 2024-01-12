import { useEffect, useState } from "react";
import "./style.css";
const initialTodoList = [
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
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleAddTaskList = () => {
    const tempAddTaskList = {
      id: Math.random(),
      name: "",
      task: [],
    };
    setTodoList([...todoList, tempAddTaskList]);
  };

  const handleSaveTaskListName = (taskName, id) => {
    setTodoList(todoList.map((item) => (item.id === id ? { ...item, name: taskName } : item)));
  };

  return (
    <div className="App text-center justify-content-center">
      {/* ... (rest of your code) ... */}
      <div className="row justify-content-center">
        <div className="col-lg-11 todomain">
          <div className="row">
            <div className="col-lg-12 text-end">
              <button onClick={handleAddTaskList}>+ Add Task List</button>
            </div>
          </div>
          <div className="row">
            {todoList.map((item) => (
              <TodosingleList key={item.id} itemObj={item} handleSaveTaskListName={handleSaveTaskListName} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TodosingleList({ itemObj, handleSaveTaskListName }) {
  const [taskListName, setTaskListName] = useState(itemObj.name);

  const handleTaskListNameChange = (e) => {
    setTaskListName(e.target.value);
  };

  const handleSaveTaskList = () => {
    handleSaveTaskListName(taskListName, itemObj.id);
  };

  return (
    <div className="col-lg-3 singletodolist mx-2">
      {itemObj.name === "" ? (
        <div>
          <input type="text" value={taskListName} onChange={handleTaskListNameChange} />
          <button onClick={handleSaveTaskList}>Save</button>
        </div>
      ) : (
        <h4>{itemObj.name}</h4>
      )}
      {/* ... (rest of your code) ... */}
    </div>
  );
}
function TodosingleTask({ itemObj, handleDeleteTask, editTask }) {
  const [editTaskName, setEditTaskName] = useState(itemObj.name);
  const [editTaskDesc, setEditTaskDesc] = useState(itemObj.description);
  const [isTaskOnEdit, setIsTaskOnEdit] = useState(false);

  const handleEditTaskNameChange = (e) => {
    setEditTaskName(e.target.value);
  };

  const handleEditTaskDescChange = (e) => {
    setEditTaskDesc(e.target.value);
  };

  const handleEditTask = () => {
    setIsTaskOnEdit(!isTaskOnEdit);
  };

  const handleSaveEdit = () => {
    editTask(editTaskName, editTaskDesc, itemObj.id);
    setIsTaskOnEdit(false);
  };

  return <div className="row singletask mt-2">{/* ... (rest of your code) ... */}</div>;
}

export default TodoList;
