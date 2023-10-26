import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends, faEnvelope, faImage,  faVideo, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'
import { Link } from "react-router-dom";
function SideBar(){
    return(

        <React.Fragment>
            <div className="sidebar">
        <ul>
        <li>
            <FontAwesomeIcon icon={faUser} />
            <Link to='myprofile'>My Profile</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faNewspaper} />
            <Link to='newspaper'>Newspaper</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserFriends} />
            <Link to='friends'>Friends</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <Link to='messages'>Message</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faImage} />
            <Link to='photos'>Photos</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} />
            <Link to='video'>Video</Link>
          </li>
          
        </ul>
      </div>
        </React.Fragment>
        
     
    );
}

export default SideBar;