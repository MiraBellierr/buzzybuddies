import React from "react";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const sideBarList = [
	{
		label: "Feed", icon: RssFeed
	},
	{
		label: "Chats", icon: Chat
	},
	{
		label: "Videos", icon: PlayCircle
	},
	{
		label: "Groups", icon: Group
	},
	{
		label: "Bookmarks", icon: Bookmark
	},
	{
		label: "Questions", icon: HelpOutline
	},
	{
		label: "Jobs", icon: WorkOutline
	},
	{
		label: "Events", icon: Event
	},
	{
		label: "Courses", icon: School
	},
];

function Sidebar() {
	const users = Users.filter(u => u.id !== 1);

	return (
		<div className="sidebar flex-[3] h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px]">
			<div className="sidebarWrapper p-5">
				<ul className="sidebarList p-0 m-0 list-none">
					{sideBarList.map((item, index) => (
						<li className="sidebarListItem flex items-center mb-5" key={index}>
							<item.icon className="sidebarIcon mr-[15px]" />
							<span className="sidebarListItemText">{item.label}</span>
						</li>
					))}
				</ul>
				<button className="sidebarButton w-[150px] border-none p-2.5 rounded-[5px] font-medium">Show More</button>
				<hr className="sidebarHr m-[20px_0]" />
				<ul className="sidebarFriendList p-0 m-0 list-none">
					{users.map(u => (
						<CloseFriend user={u} key={u.id}/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;