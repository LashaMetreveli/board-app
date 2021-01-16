import { useState } from "react";
import Input from "../Util/Input";
import uuid from "uuid/v4";
import style from "./CreateTask.module.scss";
import { columns as columnsData, items as itemsData } from "../Util/testData";
import DropDown from "../Util/DropDown";

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
    // if (
    //   taskData["duoDate"] === null ||
    //   taskData["title"] === null ||
    //   taskData["assignedTo"] === null ||
    //   taskData["board"] === null ||
    //   taskData["title"] === "" ||
    //   taskData["assignedTo"] === ""
    // ) {
    //   setErrors({
    //     ...errors,
    //     ["title"]:
    //       taskData["title"] === null || taskData["title"] === ""
    //         ? "please enter correct title"
    //         : null,
    //     ["duoDate"]:
    //       taskData["duoDate"] === null ? "please enter correct date" : null,
    //     ["board"]: taskData["board"] === null ? "please choose Board" : null,
    //     ["assignedTo"]:
    //       taskData["assignedTo"] === null || taskData["assignedTo"] === ""
    //         ? "please enter correct name"
    //         : null,
    //   });
    // } else {

    // let columnItems = columnsData["Backglog"].items;
    // columnItems.push({ id: uuid(), content: "my new task" });

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

    console.log(columnsData["Backglog"]);
    // }
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
          <div className={style.flex__container}>
            <DropDown
              taskData={taskData}
              setTaskData={setTaskData}
              clearError={() =>
                setErrors({
                  ...errors,
                  ["board"]: null,
                })
              }
              property="board"
              label="Choose Board"
              options={["BackLog", "To Do", "In Progress", "Done"]}
            />
            {errors["board"] && (
              <span className={style.error}>{errors["board"]}</span>
            )}
            <Input
              label="Task Title"
              type="text"
              placeholder={"title"}
              property="title"
              taskData={taskData}
              setTaskData={setTaskData}
              clearError={() =>
                setErrors({
                  ...errors,
                  ["title"]: null,
                })
              }
            />
            {errors["title"] && (
              <span className={style.error}>{errors["title"]}</span>
            )}
            <Input
              label="Duo Date"
              type="date"
              property="duoDate"
              taskData={taskData}
              setTaskData={setTaskData}
              clearError={() =>
                setErrors({
                  ...errors,
                  ["duoDate"]: null,
                })
              }
            />
            {errors["duoDate"] && (
              <span className={style.error}>{errors["duoDate"]}</span>
            )}
            <Input
              label="Assigned To"
              type="text"
              placeholder={"assign to"}
              property="assignedTo"
              taskData={taskData}
              setTaskData={setTaskData}
              clearError={() =>
                setErrors({
                  ...errors,
                  ["assignedTo"]: null,
                })
              }
            />
            {errors["assignedTo"] && (
              <span className={style.error}>{errors["assignedTo"]}</span>
            )}

            <button
              onClick={() => createTask()}
              className={style.overlay__create__button}
            >
              Create
            </button>
            <button
              onClick={() => toggleOverlay()}
              className={style.overlay__close__button}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
