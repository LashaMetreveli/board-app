import { useState } from "react";
import uuid from "uuid/v4";
import style from "./CreateTask.module.scss";
import { columns as columnsData, items as itemsData } from "../Util/testData";
import Forms from "./Form";

export default function CreateTask({ setColumns, columns }) {
  const [overlay, toggleOverlay] = useState(false);
  const [errors, setErrors] = useState({
    title: null,
    duoDate: null,
    assignedTo: null,
    board: null,
  });

  const [taskData, setTaskData] = useState({
    title: null,
    duoDate: null,
    assignedTo: null,
    board: null,
  });

  const clearTask = () => {
    setTimeout(function () {
      setTaskData({
        title: null,
        duoDate: null,
        assignedTo: null,
        board: null,
      });
    }, 500);
  };

  console.log(taskData);

  const createTask = () => {
    if (
      taskData["duoDate"] === null ||
      taskData["title"] === null ||
      taskData["assignedTo"] === null ||
      taskData["board"] === null ||
      taskData["title"] === "" ||
      taskData["assignedTo"] === ""
    ) {
      setErrors({
        ...errors,
        ["title"]:
          taskData["title"] === null || taskData["title"] === ""
            ? "please enter correct title"
            : null,
        ["duoDate"]:
          taskData["duoDate"] === null ? "please enter correct date" : null,
        ["board"]: taskData["board"] === null ? "please choose Board" : null,
        ["assignedTo"]:
          taskData["assignedTo"] === null || taskData["assignedTo"] === ""
            ? "please enter correct name"
            : null,
      });
    } else {
      const columnName = columnsData[taskData.board].name;
      const columnItems = columnsData[taskData.board].items;
      columnItems.push({ id: uuid(), content: taskData.title });

      setColumns({
        ...columns,
        [columnName]: {
          name: columnName,
          items: columnItems,
        },
      });

      toggleOverlay();
      clearTask();
    }
  };

  return (
    <div className={style.container}>
      <button
        className={style.create__button}
        onClick={() => toggleOverlay(!overlay)}
      >
        Create Task
      </button>
      <div className={overlay ? style.overlay__open : style.overlay}>
        <div className={style.overlay__content}>
          <button
            onClick={() => {
              toggleOverlay(!overlay);
              clearTask();
            }}
            className={style.close}
          >
            X
          </button>
          <Forms
            taskData={taskData}
            setTaskData={setTaskData}
            setErrors={setErrors}
            errors={errors}
            createTask={createTask}
            toggleOverlay={toggleOverlay}
          />
        </div>
      </div>
    </div>
  );
}
