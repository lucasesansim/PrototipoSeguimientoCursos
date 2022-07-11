import React from "react";
import { Avatar } from "@mui/material";
import './avatar.css';


const UserAvatar = ({user, usedIn}) => {
  const imageSize = usedIn === "navigator" ? "50px" : "30px";
  console.log(user);
  return (
    <div className="avatar-container">
      <Avatar 
        src={user.image}
        className="avatar-image" 
        sx={{ width: imageSize, height: imageSize }}
      />
      <div>
        <div>
          {user.name}
        </div>
        {usedIn === "navigator" && (
          <div className="avatar-email">
            {user.email}
          </div>
        )}
      </div>
    </div>
  )
}


export default UserAvatar;