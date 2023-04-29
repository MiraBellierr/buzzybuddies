import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Home() {
	return (
		<>
			<Topbar />
			<div className="homeContainer flex w-full">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}

export default Home;
