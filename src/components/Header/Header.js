import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import paths from "paths";

// assets
import { ReactComponent as FeedIcon } from './assets/icons/feedicon.svg';
import { ReactComponent as SavedIcon } from './assets/icons/savedicon.svg';
import { ReactComponent as NotificationIcon } from './assets/icons/notification_icon.svg';

export default (props) => {
    return (
        <div className="Header">

            <div className="Header__Nav">
                <div className="Header__Nav--left">
                    <h1>Madhyam</h1>
                </div>
                <div className="Header__Nav--right">
                    <ul>
                        <li>
                            <Link to={paths.home}>
                                <FeedIcon height="24" width="24" />
                                <p>Feed</p></Link>
                        </li>
                        <li>
                            <Link to={paths.home}>
                                <SavedIcon height="24" width="24" />
                                <p>Saved</p></Link>
                        </li>
                        <li>
                            <Link to={paths.home}>
                                <NotificationIcon height="24" width="24" />
                                <p>Notification</p></Link>
                        </li>
                        <li>
                            <img src="https://thispersondoesnotexist.com/image" alt="profile_img"></img>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
