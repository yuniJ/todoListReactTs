import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/common.css'
import Header from './component/header'
import SearchForm from './component/searchForm'
import CategoryTab from "./component/categoryTab";
import TodoList from "./component/todoList";
import serviceTodo from"./util/serviceTodo";
//
import {loadItems} from"./db/data";




export function App() {
  
  const _serviceTodo = new serviceTodo(loadItems());
  const _data= _serviceTodo.getList();
  // console.log(loadItems());
  
  // let loadData=loadItems(_data);
  // console.log(localStorage.getItem("key"));
  
  
  const [data, setData] = useState(_data);
  const [state, setState] = useState('all');



  const changeCategory = (categoryName:string) => {
    // console.log(categoryName);
    setState( categoryName );
  };
  const changePage = (todoItem:any) => {
    // const _data2= _serviceTodo.getList();
    // console.log("data : "+_data);
    // console.log(data);
    // if(data)todoItem="";
    // _serviceTodo.setList(todoItem)
   
    setData( todoItem );
  };

  return (
    
    <BrowserRouter>
    <div className="App">
      <Header />

       <SearchForm
        todoItem={_data}
        serviceTodo={_serviceTodo}
         onChangePage={changePage}
       />

      <section className="todo_list">
        <div className="cont">
          {/* <form>
            <button className="bt_clear" id="btnClear">
              전체삭제
            </button>
          </form> */}
          <div className="list-box">
            <CategoryTab
              category={state}
              onChangePage={changeCategory}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <TodoList
                    category="all"
                    data={_data}
                    serviceTodo={_serviceTodo}
                    onChangePage={changePage}
                  />
                }
              ></Route>
              <Route
                path="/all"
                element={
                  <TodoList
                    category={"all"}
                    data={_data}
                    serviceTodo={_serviceTodo}
                    onChangePage={changePage}
                  />
                }
              ></Route>
              <Route
                path="/today"
                element={
                  <TodoList
                    category={"today"}
                    data={_data}
                    serviceTodo={_serviceTodo}
                    onChangePage={changePage}
                  />
                }
              ></Route>
              <Route
                path="/done"
                element={
                  <TodoList
                    category={"done"}
                    data={_data}
                    serviceTodo={_serviceTodo}
                    onChangePage={changePage}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </section> 
    </div>
    </BrowserRouter>
  )
}

export default App
