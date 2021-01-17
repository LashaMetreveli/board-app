import { Draggable } from "react-beautiful-dnd";
import style from "./Item.module.scss";

export default function Item({ item, index }) {
  console.log(item.duoDate);
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              item.duoDate < new Date()
                ? style.item__content
                : style.item__content__active
            }
            style={{
              ...provided.draggableProps.style,
            }}
          >
            <h4 className={style.title}>{item.title}</h4>
            <span className={style.duo}>
              {item.duoDate.toDateString().toString().substring(4)}
            </span>
            <p className={style.assigned}>
              {"assigned to: "}
              {item.assignedTo}
            </p>
          </div>
        );
      }}
    </Draggable>
  );
}
