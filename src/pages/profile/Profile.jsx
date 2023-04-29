import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile flex">
				<Sidebar />
				<div className="profileRight flex-[9]">
					<div className="profileRightTop">
						<div className="profileCover h-80 relative">
							<img src="/assets/post/2.jpeg" alt="" className="profileCoverImg w-full h-[250px] object-cover" />
							<img src="/assets/person/1.jpeg" alt="" className="profileUserImg w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px] border-solid border-white" />
						</div>
						<div className="profileInfo flex flex-col items-center justify-center">
							<h4 className="profileInfoName text-[24px]">Anya Forger</h4>
							<span className="profileInfoDesc font-light">Hi there! ^-^</span>
						</div>
					</div>
					<div className="profileRightBottom flex">
						<Feed />
						<Rightbar profile/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;