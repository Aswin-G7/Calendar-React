import React from "react";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="menu_content">
        <ul className="menu_items">
          <div className="menu_title menu_dahsboard"></div>
          <li className="item">
            <div className="nav_link submenu_item">
              <span className="navlink_icon">
                <i className="bx bx-home-alt"></i>
              </span>
              {!collapsed && <span className="navlink">Home</span>}
              {!collapsed && <i className="bx bx-chevron-right arrow-left"></i>}
            </div>
            {!collapsed && (
              <ul className="menu_items submenu">
                <a href="#" className="nav_link sublink">Calendar</a>
                <a href="#" className="nav_link sublink">Tasks</a>
                <a href="#" className="nav_link sublink">Reminders</a>
              </ul>
            )}
          </li>
          <li className="item">
            <div className="nav_link submenu_item">
              <span className="navlink_icon">
                <i className="bx bx-grid-alt"></i>
              </span>
              {!collapsed && <span className="navlink">Overview</span>}
              {!collapsed && <i className="bx bx-chevron-right arrow-left"></i>}
            </div>
            {!collapsed && (
              <ul className="menu_items submenu">
                <a href="#" className="nav_link sublink">Analytics</a>
                <a href="#" className="nav_link sublink">Reports</a>
              </ul>
            )}
          </li>
        </ul>

        <ul className="menu_items">
          <div className="menu_title menu_editor"></div>
          <li className="item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bxs-magic-wand"></i>
              </span>
              {!collapsed && <span className="navlink">Magic Build</span>}
            </a>
          </li>
          <li className="item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-loader-circle"></i>
              </span>
              {!collapsed && <span className="navlink">Filters</span>}
            </a>
          </li>
          <li className="item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-cloud-upload"></i>
              </span>
              {!collapsed && <span className="navlink">Upload</span>}
            </a>
          </li>
        </ul>

        <ul className="menu_items">
          <div className="menu_title menu_setting"></div>
          <li className="item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-cog"></i>
              </span>
              {!collapsed && <span className="navlink">Settings</span>}
            </a>
          </li>
          <li className="item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-flag"></i>
              </span>
              {!collapsed && <span className="navlink">Notice Board</span>}
            </a>
          </li>
          <li className="item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-layer"></i>
              </span>
              {!collapsed && <span className="navlink">Features</span>}
            </a>
          </li>
        </ul>

        <div className="bottom_content">
          <div className="bottom" onClick={toggleSidebar}>
            {!collapsed ? (
              <>
                <span>Collapse</span>
                <i className="bx bx-log-out"></i>
              </>
            ) : (
              <i className="bx bx-log-in"></i>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
