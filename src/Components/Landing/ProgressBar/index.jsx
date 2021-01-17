import { Fragment, useEffect, useState } from "react";
import Bar from "./Bar";
import style from "./ProgressBar.module.scss";

export default function ProgressBar({ columns, itemsData }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let init = 0;
    Object.entries(columns).map(([columnId, column], index) => {
      init += column.items.length;
    });
    setTotal(init);
    console.log(total);
  }, [columns]);

  return (
    <Fragment>
      <hr className={style.line} />
      <div className={style.container}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Bar
              key={column.name}
              total={total}
              mine={column.items.length}
              name={column.name}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
