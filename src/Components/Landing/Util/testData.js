import uuid from "uuid/v4";

export const items = [
  {
    id: uuid(),
    title: "Task 1",
    duoDate: new Date("2025-01-14"),
    assignedTo: "anna",
  },
  {
    id: uuid(),
    title: "Task 2",
    duoDate: new Date("2022-01-14"),
    assignedTo: "gio",
  },
  {
    id: uuid(),
    title: "Task 3",
    duoDate: new Date("2023-01-14"),
    assignedTo: "mari",
  },
  {
    id: uuid(),
    title: "Task 4",
    duoDate: new Date("2027-01-14"),
    assignedTo: "luka",
  },
  {
    id: uuid(),
    title: "Task 5",
    duoDate: new Date("1999-01-14"),
    assignedTo: "luka",
  },
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
