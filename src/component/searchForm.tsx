import React, { Component, useState } from "react";
import "../styles/searchForm.css";

// import addTodoItem from "../util/addTodoItem";

// interface inputText {
//   value: string | undefined;
// }

function SearchForm(props:any){

  
  const [InputValue, setInputValue] = useState<string>('');
  
  const onChangeInput = (e:any) => {
    
    setInputValue(e.target.value)
    // console.log(e.target.value);
  };

  const onAddTodo = () => {
    // console.log(InputValue?.value);
    
    if (InputValue) {
      props.onChangePage(
        // localStorage.setItem("key", JSON.stringify(dataList));
        props.serviceTodo.addItem(props.todoItem, InputValue)
      );
    }
    
    setInputValue('')
    
  };

  return(
    <section className="todo_fm">
      <div className="cont">
        
        <input
          type="text"
          id="todoFm"
          placeholder="할일을 입력해주세요!"
          onChange={onChangeInput}
          value={InputValue}
        />
        <button
          className="bt_confirm"
          id="btnConfirm"
          onClick={onAddTodo}
        >
          확인
        </button>
      </div>
    </section>
  )
}


export default SearchForm;
