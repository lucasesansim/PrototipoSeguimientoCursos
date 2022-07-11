import React from "react";
import { Avatar } from "@mui/material";
import './avatar.css';


const UserAvatar = ({user, usedFor}) => {
  const imageSize = usedFor === "list" ? "30px" : "50px";
  console.log(user);
  return (
    <div className="avatar-container">
      <Avatar 
        src={user.image}
        className="avatar-image" 
        sx={{ width: imageSize, height: imageSize }}
      />
      {usedFor !== 'imageOnly' && (
        <div>
          <div>
            {user.name}
          </div>
          {usedFor === "navigator" && (
            <div className="avatar-email">
              {user.email}
            </div>
          )}
      </div>
      )}
    </div>
  )
}


export default UserAvatar;