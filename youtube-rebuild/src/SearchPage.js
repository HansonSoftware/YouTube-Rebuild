import React from "react";
import './SearchPage.css'
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import TuneSharpIcon from '@mui/icons-material/TuneSharp';

function SearchPage() {
    return (
        <div className="SearchPage">

            <div className="SearchPage-Filter">
                <TuneSharpIcon/>
                <h2>FILTER</h2>
            </div>

            <hr/>

            <ChannelRow
            image=""
            channel="Channel Name"
            verified
            subs="100M"
            numVideos={496}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            <hr/>

            <VideoRow
                views="1000"
                subs="1000"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                timestamp="3 days ago"
                channel="Channel Name"
                title="Video Title"
                image="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
            />

            <VideoRow
                views="1000"
                subs="1000"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                timestamp="3 days ago"
                channel="Channel Name"
                title="Video Title"
                image="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
            />

            <VideoRow
                views="1000"
                subs="1000"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                timestamp="3 days ago"
                channel="Channel Name"
                title="Video Title"
                image="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
            />

            <VideoRow
                views="1000"
                subs="1000"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                timestamp="3 days ago"
                channel="Channel Name"
                title="Video Title"
                image="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
            />

            <VideoRow
                views="1000"
                subs="1000"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                timestamp="3 days ago"
                channel="Channel Name"
                title="Video Title"
                image="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
            />
            
        </div>
    )
}

export default SearchPage