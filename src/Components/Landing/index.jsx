import style from "./main.module.scss";

import Columns from "./Columns";
import CreateTask from "./CreateTask";
import { columns as columnsData, items as itemsData } from "./Util/testData";
import { useState } from "react";

export default function Landing() {
  const [columns, setColumns] = useState(columnsData);

  return (
    <div className={style.container}>
      <h1 className={style.logo}>Board</h1>
      <CreateTask columns={columns} columns={columns} setColumns={setColumns} />
      <Columns
        columns={columns}
        setColumns={setColumns}
        itemsData={itemsData}
      />
      {/* <ProgressBar /> */}
    </div>
  );
}
