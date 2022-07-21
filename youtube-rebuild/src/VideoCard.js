import { Avatar } from "@mui/material";
import React from "react";

import './VideoCard.css'

function VideoCard({ image, title, channel, channelImage, views, timestamp }) {
    return (
        <div className="VideoCard">

             <img className="VideoCard-Thumbnail" src={image} alt = ""/>

             <div className="VideoCard-Info">

                <Avatar 
                    className="VideoCard-Avatar" 
                    alt={channel} 
                    src={channelImage}
                />
                <div className="VideoCard-Text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            
             </div>
        </div>
    )
}

export default VideoCard