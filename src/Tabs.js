import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tab ${activeTab === index ? "active" : ""}`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {tabs[activeTab].content}
            </div>
        </div>



    );
};
export default Tabs;

