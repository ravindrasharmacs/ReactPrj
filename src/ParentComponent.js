import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const data = {
        name: "John",
        age: 30,
        occupation: "Software Engineer"
    }
 

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent userData={data} />
    </div>
  );
};

export default ParentComponent;