import React, { ReactElement, useState } from "react";
import "./index.scss";

type Props = {
  children: ReactElement[];
};

const TabsBlock: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="main-tabs-container">
      <div className="tabs-container">
        {children.map((item, index) => (
          <div onClick={item.props.click} key={item.props.title}>
            <div
              onClick={() => {
                onTabClick(index);
              }}
              className={`tabs-item ${selectedTab === index ? "active" : ""}`}
            >
              <span className="tabs-item__btn">{item.props.title}</span>
              <div className="tabs-item__circle" />
            </div>
          </div>
        ))}
      </div>
      <div className="tabs-content-container">
        {children[selectedTab]}
      </div>
    </div>
  );
};

export default TabsBlock;
