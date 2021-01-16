import { Draggable } from "react-beautiful-dnd";
import style from "./Item.module.scss";

export default function Item({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              snapshot.isDragging
                ? style.item__content
                : style.item__content__active
            }
            style={{
              ...provided.draggableProps.style,
            }}
          >
            {item.content}
          </div>
        );
      }}
    </Draggable>
  );
}
