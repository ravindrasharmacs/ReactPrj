import React, { useState } from "react";
import Modal from "./Modal";
import Tabs from "./Tabs"; // Ensure you have a Tabs component imported

function App() {
  const tabsData = [
    {
      title: "Tab 1",
      content: "This is the content of Tab 1",
    },
    {
      title: "Tab 2",
      content: "This is the content of Tab 2",
    },
    {
      title: "Tab 3",
      content: "This is the content of Tab 3",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Tabs Example</h1>
      <Tabs tabs={tabsData} />
      
      <div>
        <h1>Modal App</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>This is a Modal</h2>
          <p>You can put any content here</p>
        </Modal>

        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
