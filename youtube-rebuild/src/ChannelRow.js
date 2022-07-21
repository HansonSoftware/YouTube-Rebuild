import { Avatar } from "@mui/material";
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import React from "react";
import './ChannelRow.css'

function ChannelRow({ image, channel, subs, numVideos, description, verified }) {
    return (
        <div className="ChannelRow">

            <Avatar 
                className="ChannelRow-Image"
                alt={channel}
                src={image}
            />

            <div className="ChannelRow-Text">
                <h4>
                    {channel}
                    {verified && <VerifiedSharpIcon/>}
                </h4>
                <p>{subs} subscribers • {numVideos} videos</p>
                <p>{description}</p>
            </div> 

        </div>
    )
}

export default ChannelRow