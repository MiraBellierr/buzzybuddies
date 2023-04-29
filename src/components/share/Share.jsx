import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

function Share() {
	return (
		<div className="share w-full h-[170px] rounded-[10px] shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] [-webkit-box-shadow:0_0_16px_-8px_rgba(0,0,0,0.68)]">
			<div className="shareWrapper p-2.5">
				<div className="shareTop flex items-center">
					<img className="shareProfileImg w-[50px] h-[50px] rounded-full object-cover mr-2.5" src="/assets/person/1.jpeg" alt="" />
					<input placeholder="What's in your mind?" className="shareInput border-none w-4/5 focus:outline-none" />
				</div>
				<hr className="shareHr m-5" />
				<div className="shareBottom flex items-center justify-between">
					<div className="shareOptions flex ml-5">
						<div className="shareOption flex items-center mr-[15px] cursor-pointer">
							<PermMedia className="shareIcon text-[18px] mr-[3px]" htmlColor="tomato" />
							<span className="shareOptionText text-[14px] font-medium">Photo or Video</span>
						</div>
						<div className="shareOption flex items-center mr-[15px] cursor-pointer">
							<Label className="shareIcon text-[18px] mr-[3px]" htmlColor="blue" />
							<span className="shareOptionText text-[14px] font-medium">Tag</span>
						</div>
						<div className="shareOption flex items-center mr-[15px] cursor-pointer">
							<Room className="shareIcon text-[18px] mr-[3px]" htmlColor="green" />
							<span className="shareOptionText text-[14px] font-medium">Location</span>
						</div>
						<div className="shareOption flex items-center mr-[15px] cursor-pointer">
							<EmojiEmotions className="shareIcon text-[18px] mr-[3px]" htmlColor="goldenrod" />
							<span className="shareOptionText text-[14px] font-medium">Feelings</span>
						</div>
					</div>
					<button className="shareButton border-none p-[7px] rounded-[5px] bg-green-600 font-medium mr-5 cursor-pointer text-white">Share</button>
				</div>
			</div>    
		</div>
	);
}

export default Share;