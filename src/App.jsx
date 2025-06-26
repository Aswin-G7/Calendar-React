import { useState } from 'react';
import Calender from './Calender';
import Sidebar from '../Sidebar';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className={`main-content ${
          collapsed ? 'with-sidebar-collapsed' : 'with-sidebar'
        }`}
      >
        <Calender />
      </div>
    </div>
  );
}

export default App;
