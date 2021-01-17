import style from "./Bar.module.scss";

export default function Bar({ total, mine, name }) {
  const percentage = (mine / total) * 100;
  return (
    <div className={style.container}>
      <p className={style.bar__name}>
        {name} {Math.round(percentage) + "%"}
      </p>
      <div className={style.bar__container}>
        <div
          style={{ width: `${percentage}%` }}
          className={style.progress__bar}
          id="bar"
        ></div>
      </div>
    </div>
  );
}
