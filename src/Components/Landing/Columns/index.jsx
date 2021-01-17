import style from "./Columns.module.scss";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import onDragEnd from "../Util/onDragEnd";
import Item from "./Item";

export default function Columns({ columns, setColumns }) {
  return (
    <div className={style.container}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className={style.column} key={columnId}>
              <h2 className={style.column__name}>
                {column.name}{" "}
                {column.items.length === 0 ? "" : column.items.length}
              </h2>
              <div className={style.column__wrapper}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={
                          !snapshot.isDraggingOver
                            ? style.column__content
                            : style.column__content__active
                        }
                      >
                        {column.items.map((item, index) => {
                          return <Item key={index} item={item} index={index} />;
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
