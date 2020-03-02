import React, { useState } from "react";
import "./Todoapp.css";
const Todoapp = () => {
  const [inputValue, setInputValue] = useState("");
  const [activityList, setActivityList] = useState([]);

  const onChangeInput = event => {
    const { value } = event.target;
    //     const  value = event.target.value;

    setInputValue(value);
    // this.setState({ inputValue: event.target.value})
  };
  const addActivity = item => {
    const a = [...activityList];
    if (inputValue !== "") {
      a.push({ name: item, isComplted: false });
      setActivityList(a);
      setInputValue("");
    }
  };

  const onDeleteActivity = i => {
    const a = [...activityList];
    a.splice(i, 1);

    setActivityList(a);
  };
  const onComplete = (i, statut) => {
    activityList.map((el, index) => {
      if (index === i) {
        el.isComplted = statut;
      }
    });
    const a = [...activityList];
    setActivityList(a);
  };
  console.log(activityList);

  return (
    <div className="global-container">
      <div className="container">
        <div className="child">
          <h1 className="style">To-Do App!</h1>
          <p className="style">Add New To-Do</p>
          <input
            type="text"
            className="input"
            value={inputValue}
            onChange={onChangeInput}
          />
          <button className="button" onClick={() => addActivity(inputValue)}>
            Add
          </button>
        </div>
      </div>
      <h1 className="style-title">Let's Get some work done</h1>
      <div className="result_container">
        {activityList.map((el, i) => {
          console.log("el", el);
          return (
            <div key={el.name} className="aline">
              <button
                className="btn"
                onClick={() => onComplete(i, !el.isComplted)}
              >
                {el.isComplted ? "undo" : "Completed"}
              </button>
              <button className="btn" onClick={() => onDeleteActivity(i)}>
                Delete
              </button>
              <div className={el.isComplted ? "barrer" : "non-barrer"}>
                {el.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todoapp;
