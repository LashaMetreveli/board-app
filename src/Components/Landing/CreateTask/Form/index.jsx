import DropDown from "../../Util/DropDown";
import Input from "../../Util/Input";
import style from "./Form.module.scss";

export default function Forms({
  taskData,
  setTaskData,
  setErrors,
  errors,
  createTask,
  toggleOverlay,
}) {
  return (
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
        value={"Backlog"}
        property="board"
        label="Choose Board"
        options={["Backlog", "To Do", "In Progress", "Done"]}
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
    </div>
  );
}
