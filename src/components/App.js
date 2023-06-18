
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [tab, setTab] = useState('Tab 1')
  const [tab2, setTab2] = useState('Tab A')
  return (
    <div>
        <ul onClick={(e) => setTab(e.target.innerHTML)}>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
        </ul>
        <p>Content for {tab}</p>
        <ul onClick={(e) => setTab2(e.target.innerHTML)}>
          <li>Tab A</li>
          <li>Tab B</li>
          <li>Tab C</li>
        </ul>
        <p>Content for {tab2}</p>
    </div>
  )
}

export default App
