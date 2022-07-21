import React, { useState } from 'react';
import './Header.css';

// MUI Icon Imports
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Avatar } from '@mui/material';

import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="Header">

            <div className="Header-Left">
                <MenuSharpIcon/>
                <Link to="/">
                    <img className="Header-Logo" src="https://www.svgrepo.com/show/197953/youtube.svg"/>
                </Link>
            </div>

            <div className="Header-Search">
                <input 
                    onChange={e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="Header-Search-Button"/>
                </Link>
            </div>

            <div className="Header-Icons">
                <VideoCallSharpIcon className="Header-Icon"/>
                <AppsSharpIcon className="Header-Icon"/>
                <NotificationsSharpIcon className="Header-Icon"/>
                <Avatar
                    alt="HansonSoftware"
                    src="https://avatars.githubusercontent.com/u/76855780?s=40&v=4"
                />
            </div>
            
        </div>
    )
}

export default Header