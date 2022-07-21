import React from "react";
import './VideoRow.css'

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className="VideoRow">

            <img src={image} alt = ""/>
            
            <div className="VideoRow-Text">
                <h3>{title}</h3>
                <p className="VideoRow-Info">
                    {channel} • <span className="VideoRow-Subs">{subs}</span> Subscribers {views} views • {timestamp}
                </p>
                <p className="VideoRow-Description">{description}</p>
            </div>

        </div>
    )
}

export default VideoRow