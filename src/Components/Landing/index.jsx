import style from "./main.module.scss";

import Columns from "./Columns";
import CreateTask from "./CreateTask";
import ProgressBar from "./ProgressBar";
import { columns as columnsData, items as itemsData } from "./Util/testData";
import { useState } from "react";

export default function Landing() {
  const [columns, setColumns] = useState(columnsData);

  return (
    <div className={style.container}>
      <div className={style.bar__decoration}>
        <div className={style.cubes}>
          <span className={style.cube1}></span>
          <span className={style.cube2}></span>
          <span className={style.cube3}></span>
          <h1 className={style.logo}>Board</h1>
        </div>
      </div>

      <CreateTask columns={columns} columns={columns} setColumns={setColumns} />
      <Columns columns={columns} setColumns={setColumns} />
      <ProgressBar columns={columns} />
    </div>
  );
}
