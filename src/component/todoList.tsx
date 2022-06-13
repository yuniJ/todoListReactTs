// import React, { useState } from "react";
import "../styles/todoList.css";
import { Component, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
// import {loadItems, saveItems} from"../db/data";
// import checkTodoItem from "../util/checkTodoItem";
// import deleteTodoItem from "../util/deleteTodoItem";
// import deleteTodoItem from "../util/serviceTodo";

// import { render } from "@testing-library/react";

// import todoData from "../db/data";


function TodoList(props:any) {
  // const todoData = loadItems();

  const filterByCategory = () => {
    console.log(props.data);
    
    // if(!props.data[0]){
    //   return props.data;
    // }

    if (props.category === "today") {
      return props.data.filter((list: { completed: any; }) => !list.completed);
    } else if (props.category === "done") {
      return props.data.filter((list: { completed: any; }) => list.completed);
    }

    return props.data;
  };

  const clickTodoItem = (id: any, changeTodoItem: (arg0: Array<object>, arg1: string) => any) => {
    // console.log(props.serviceTodo.getList());
    
    props.onChangePage(changeTodoItem(props.data, id));
  };



  console.log("TodoList render");

  // const listGroup = renderList(todoData);
  
  const listGroup = filterByCategory();
  // console.log(listGroup);
  if(listGroup){
    return (
      <div className="tab_cnt">
        <ul>
          {listGroup.map((list: { completed: boolean; id: Key | null | undefined; title: string; time: string; }) => (
            <li className={list.completed ? "complete" : ""} key={list.id}>
              <span className="txt">{list.title}</span>
              <div className="btn-box">
                <button
                  className="bt_complete"
                  onClick={() =>clickTodoItem(list.id, props.serviceTodo.checkItem)}
                >
                  확인
                </button>
                <button
                  className="bt_del"
                  onClick={() =>clickTodoItem(list.id, props.serviceTodo.deleteItem)}
                >
                  삭제
                </button>
              </div>
              <span className="time">{list.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null
}

export default TodoList;
