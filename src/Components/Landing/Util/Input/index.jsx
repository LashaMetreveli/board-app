import { Fragment } from "react";
import style from "./Input.module.scss";

export default function Input({
  placeholder,
  taskData,
  setTaskData,
  property,
  type,
  label,
  clearError,
}) {
  return (
    <Fragment>
      <h3 className={style.label}>{label}</h3>
      <input
        autoComplete="off"
        name={property}
        max={30}
        type={type}
        placeholder={placeholder}
        value={taskData[property] || ""}
        onChange={(e) => {
          setTaskData({
            ...taskData,
            [property]: e.target.value,
          });
          clearError();
        }}
        className={style.container}
      />
    </Fragment>
  );
}
