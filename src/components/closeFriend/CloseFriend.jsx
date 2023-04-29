import React from "react";
import PropTypes from "prop-types";

function CloseFriend({user}) {
	return (
		<li className="sidebarFriend flex items-center mb-[15px]">
			<img src={user.profilePicture} alt="" className="sidebarFriendImg w-8 h-8 rounded-full object-cover mr-2.5" />
			<span className="sidebarFriendName">{user.username}</span>
		</li>
	);
}

export default CloseFriend;

CloseFriend.propTypes = {
	user: PropTypes.object.isRequired,
};