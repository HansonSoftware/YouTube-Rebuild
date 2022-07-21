import React from "react";
import './SidebarRow.css';

function SidebarRow( {selected, Icon, title} ) {
    return (
        <div className={`SidebarRow ${selected && "selected"}`}>
            <Icon className="SidebarRow-Icon"/>
            <h2 className="SidebarRow-Title">{title}</h2>
        </div>
    )
}

export default SidebarRow