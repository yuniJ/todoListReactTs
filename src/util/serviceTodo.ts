// import checkTodoItem from "./checkTodoItem";
import getDateTime from "./date";
import { saveItems } from "../db/data";

function newID() {
  return Math.random().toString(36).substr(2, 16);
}

export default class serviceTodo {
  public list: Array<Object>;

  constructor(list: Array<Object>) {
    this.list = list;
  }

  getList() {
    return this.list;
  }

  checkItem(list: any[], id: any) {
    // list = this.list;
    // console.log(this.list);

    const newList = list.map((item) => {
      if (item.id === id) {
        // console.log(item);
        item.completed = true;
      }
      // console.log(item.indexOf);
      return item;
    });

    saveItems(newList);

    return newList;
  }

  deleteItem(list: any[], id: any) {
    const newList = list.findIndex((item) => item.id === id);
    const deleteList = list.splice(newList, 1);
    // console.log(newList + " ");
    // console.log("deleteList : "+deleteList);
    // console.log("newList : "+newList);
    localStorage.clear();
    // console.log(list);

    saveItems(list);

    return deleteList;
  }

  addItem(todoData: Array<object>, todoTitle: string | undefined) {
    // if (!todoData) return;
    console.log(todoData);
    let addList;
    if (todoData) {
      addList = todoData.push({
        id: newID(),
        title: todoTitle,
        time: getDateTime(),
        completed: false,
      });
    } else {
      todoData = [
        {
          id: newID(),
          title: todoTitle,
          time: getDateTime(),
          completed: false,
        },
      ];
      addList = todoData;
    }
    saveItems(todoData);

    // console.log("add : " + todoData);

    return addList;
  }
}
