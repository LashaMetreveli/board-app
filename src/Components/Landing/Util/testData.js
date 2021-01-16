import uuid from "uuid/v4";

export const items = [
  { id: uuid(), content: "Task 1" },
  { id: uuid(), content: "Task 2" },
  { id: uuid(), content: "Task 3" },
  { id: uuid(), content: "Task 4" },
  { id: uuid(), content: "Task 5" },
];

export const columns = {
  ["Backlog"]: {
    name: "Backlog",
    items: items,
  },
  ["To Do"]: {
    name: "To Do",
    items: [],
  },
  ["In Progress"]: {
    name: "In Progress",
    items: [],
  },
  ["Done"]: {
    name: "Done",
    items: [],
  },
};
