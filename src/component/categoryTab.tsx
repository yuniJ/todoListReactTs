import React, { Component, useState } from "react";
import {Router, Link} from 'react-router-dom';

import "../styles/categoryTab.css";

function CategoryTab(props:any) {
  // const [tab, setTab] = useState('all');

  const clickCategory = (e:any) => {
    const locationHref = e.target.href;
    const tab = locationHref.split("/").pop();
    // console.log(tab);
    // e.preventDefault();
    props.onChangePage(tab);
  };
  
  function categoryTabName() {
    const locationHref = window.location.pathname;
    const tab = locationHref.split("/").pop();
    console.log(tab);
    
    if (tab === "" || tab === "all") {
      return props.category;
    } else {
      return tab;
    }
  }
 
    console.log("CategoryTab render");
    const tabName = categoryTabName();
    // console.log(tabName);
    return (
      <div className="tab">
        <form name="tabBtn">
          <ul>
            <li className={tabName === "all" ? "on" : ""}>
              <Link to="/todoListReactTs/all" onClick={clickCategory}>
                all
              </Link>
            </li>
            <li className={tabName === "today" ? "on" : ""}>
              <Link to="/todoListReactTs/today" onClick={clickCategory}>
                today
              </Link>
            </li>
            <li className={tabName === "done" ? "on" : ""}>
              <Link to="/todoListReactTs/done" onClick={clickCategory}>
                done
              </Link>
            </li>
          </ul>
        </form>
      </div>
    );
  
}


export default CategoryTab;
