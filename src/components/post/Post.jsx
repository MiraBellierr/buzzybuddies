import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Users } from "../../dummyData";

function Post({ post }) {	
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandle = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post w-full rounded-[10px] shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] [-webkit-box-shadow:0_0_16px_-8px_rgba(0,0,0,0.68)] m-[30px_0]">
			<div className="postWrapper p-2.5">
				<div className="postTop flex items-center justify-between">
					<div className="postTopLeft flex items-center">
						<img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg w-8 h-8 rounded-full object-cover" />
						<span className="postUsername text-[15px] font-medium m-[0_10px]">{Users.filter(u => u.id === post.userId)[0].username}</span>
						<span className="postDate text-[12px]">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter m-[20px_0]">
					<span className="postText">{post?.desc}</span>
					<img src={post?.photo} alt="" className="postImg mt-5 w-full max-h-[500px] object-contain" />
				</div>
				<div className="postBottom flex items-center justify-between">
					<div className="postBottomLeft flex items-center">
						<img src="/assets/like.png" alt="" className="likeIcon w-6 h-6 mr-[5px] cursor-pointer" onClick={likeHandle} />
						<img src="/assets/heart.png" alt="" className="likeIcon w-6 h-6 mr-[5px] cursor-pointer" onClick={likeHandle} />
						<span className="postLikeCounter text-[15px]">{like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText text-[15px] cursor-pointer border-b-[1px] border-dashed border-gray-600">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Post;