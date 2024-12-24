import React, { useState } from "react";
import Modal from "./Modal";
import Tabs from "./Tabs";
import ImageCarousel from "./ImageCarousel";
import ParentComponent from "./ParentComponent";
;// Add this import

function App() {
  const images = [
    'https://media.istockphoto.com/id/1252264724/photo/the-modern-creative-communication-and-internet-network-connect-in-smart-city.jpg?s=2048x2048&w=is&k=20&c=aPRTiE0dwv__syNDvV7HZqC2TNXzUBuEjX3EOTVQiYk=', 
    'https://media.istockphoto.com/id/1252264734/photo/the-modern-creative-communication-and-internet-network-connect-in-smart-city.jpg?s=2048x2048&w=is&k=20&c=ofT7F_A9xB_r35N6-LN7YQjeQ83LkgWfiozDOJe-o-w=',
    'https://media.istockphoto.com/id/672032800/photo/computer-network-connection-modern-city-technology.jpg?s=2048x2048&w=is&k=20&c=ukqgpuY-eCqCSt1uH_lK6bvkCaMjm96PWJiLoF4Bw24='
  ];

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
      <h1>Parent Component Example</h1>
      <ParentComponent />
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={images} />

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
