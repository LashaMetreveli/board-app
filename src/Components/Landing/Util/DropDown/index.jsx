import style from "./DropDown.module.scss";

export default function DropDown({
  onChange,
  value,
  options,
  title,
  setTaskData,
  taskData,
  clearError,
  label,
  property,
}) {
  return (
    <div className={style.container}>
      <h3 className={style.label}>{label}</h3>
      <select
        className={style.select}
        value={value}
        onChange={(e) => {
          setTaskData({
            ...taskData,
            [property]: e.target.value,
          });
          clearError();
        }}
      >
        {options.map((value) => {
          return (
            <option className={style.option} key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
