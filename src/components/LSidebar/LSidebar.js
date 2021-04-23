import React from 'react';
import './LSidebar.css';
import Icons from './Icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'

function LSidebar() {
    return(
        <div className='l-sidebar'>
            <TwitterIcon />
            <Icons Symbol={HomeIcon} text='Home' active/>
            <Icons Symbol={SearchIcon} text='Explore' />
            <Icons Symbol={NotificationsNoneIcon} text='Notifications' />
            <Icons Symbol={MailOutlineIcon} text='Messages' />
            <Icons Symbol={BookmarkBorderIcon} text='Bookmarks' />
            <Icons Symbol={ListAltIcon} text='Lists' />
            <Icons Symbol={PermIdentityIcon} text ='Profile' />
            <Icons Symbol={MoreHorizIcon} text='More' />
            <Button variant='outlined' className='tweet-btn' fullWidth>Tweet</Button>
        </div>
    );
}

export default LSidebar;