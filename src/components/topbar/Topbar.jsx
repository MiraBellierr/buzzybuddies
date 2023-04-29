import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const topBarIcons = [
	{
		label: "Person", icon: Person
	},
	{
		label: "Chat", icon: Chat
	},
	{
		label: "Notifications", icon: Notifications
	},
];

function Topbar() {
	return (
		<div className="topbarContainer h-[50px] w-full bg-rose-600 flex items-center sticky top-0 z-[999]">
			<div className="topbarLeft flex-[3]">
				<span className="logo text-[24px] ml-5 font-bold text-white cursor-pointer">BuzzyBuddies</span>
			</div>
			<div className="topbarCenter flex-[5]">
				<div className="searchbar w-full h-[30px] bg-white rounded-[30px] flex items-center">
					<Search className='searchicon !text-[20px] ml-2.5' />
					<input placeholder='Search for friend, post or video' className="searchInput border-none w-[70%] focus:outline-none" />
				</div>
			</div>
			<div className="topbarRight flex-[4] flex items-center justify-around text-white">
				<div className="topbarLinks">
					<span className="topbarLink mr-2.5 text-[14px] cursor-pointer">Homepage</span>
					<span className="topbarLink mr-2.5 text-[14px] cursor-pointer">Timeline</span>
				</div>
				<div className="topbarIcons flex">
					{topBarIcons.map((item, index) => (
						<div className="topbarIconItem mr-[15px] cursor-pointer relative" key={index}>
							<item.icon />
							<span className="topbarIconBadge w-[15px] h-[15px] bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-[12px]">1</span>
						</div>
					))}
				</div>
				<img src="/assets/person/1.jpeg" alt="" className="topbarImg w-[32px] h-[32px] rounded-full object-cover cursor-pointer" />
			</div>

		</div>
	);
}

export default Topbar;
