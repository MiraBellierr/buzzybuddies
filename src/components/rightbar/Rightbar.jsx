import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import PropTypes from "prop-types";

function Rightbar({profile}) {
	const users = Users.filter(u => u.id !== 1);

	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer flex items-center">
					<img src="/assets/gift.png" alt="" className="birthdayImg w-10 h-10 mr-2.5" />
					<span className="birthdayText font-light text-[15px]"><b>Fiona Frost</b> and <b>3 other friends</b> have a birthday today</span>
				</div>
				<img src="/assets/ad.png" alt="" className="rightbarAd w-full rounded-[10px] m-[30px_0]" />
				<h4 className="rightbarTitle mb-5">Online Friends</h4>
				<ul className="rightbarFriendList p-0 m-0 list-none">
					{users.map(u => (
						<Online user={u} key={u.id} />
					))}
				</ul>
			</>
		);
	};
	
	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle text-[18px] font-medium mb-2.5">User information</h4>
				<div className="rightbarInfo mb-[30px]">
					<div className="rightbarInfoItem mb-2.5">
						<span className="rightbarInfoKey font-medium mr-[15px] text-[#555]">City:</span>
						<span className="rightbarInfoValue font-light">Tokyo</span>
					</div>
					<div className="rightbarInfoItem mb-2.5">
						<span className="rightbarInfoKey font-medium mr-[15px] text-[#555]">From:</span>
						<span className="rightbarInfoValue font-light">Tokyo</span>
					</div>
					<div className="rightbarInfoItem mb-2.5">
						<span className="rightbarInfoKey font-medium mr-[15px] text-[#555]">Relationship:</span>
						<span className="rightbarInfoValue font-light">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle text-[18px] font-medium mb-2.5">User friends</h4>
				<div className="rightbarFollowings flex flex-wrap justify-between">
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg w-[100px] h-[100px] object-cover rounded-[5px]" />
						<span className="rightbarFollowingName">Yoe Forger</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg w-[100px] h-[100px] object-cover rounded-[5px]" />
						<span className="rightbarFollowingName">Loid Forger</span>
					</div>
					<div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
						<img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg w-[100px] h-[100px] object-cover rounded-[5px]" />
						<span className="rightbarFollowingName">Bond Forger</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="rightbar flex-[3.5]">
			<div className="rightbarWrapper p-[20px_20px_0_0]">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
}

export default Rightbar;

Rightbar.propTypes = {
	profile: PropTypes.bool,
};