import React from "react";

function Register() {
	return (
		<div className='register w-screen h-screen bg-[#f0f2f5] flex items-center justify-center'>
			<div className="registerWrapper w-[70%] h-[70%] flex">
				<div className="registerLeft flex-[1] flex flex-col justify-center">
					<h3 className="registerLogo text-[50px] font-extrabold text-rose-600 mb-2.5">BuzzyBuddies</h3>
					<span className="registerDesc text-[24px]">BuzzyBuddies is a lively and vibrant social media app that aims to connect people with shared interests and hobbies.</span>
				</div>
				<div className="registerRight flex-[1] flex flex-col justify-center">
					<div className="registerBox h-[400px] p-5 bg-white rounded-[10px] flex flex-col justify-between">
						<input placeholder="Username" className="registerInput h-[50px] rounded-[10px] border-[1px] border-solid border-gray-600 text-[18px] pl-5 focus:outline-none" />
						<input type="email" placeholder="Email" className="registerInput h-[50px] rounded-[10px] border-[1px] border-solid border-gray-600 text-[18px] pl-5 focus:outline-none" />
						<input type="password" placeholder="Password" className="registerInput h-[50px] rounded-[10px] border-[1px] border-solid border-gray-600 text-[18px] pl-5 focus:outline-none" />
						<input type="password" placeholder="Password Again" className="registerInput h-[50px] rounded-[10px] border-[1px] border-solid border-gray-600 text-[18px] pl-5 focus:outline-none" />
						<button className="registerButton h-[50px] rounded-[10px] border-none bg-rose-700 text-white text-[20px] font-medium cursor-pointer">Sign Up</button>
						<button className="registerRegisterButton w-[60%] self-center h-[50px] rounded-[10px] border-none bg-[#42b72a] text-white text-[20px] font-medium cursor-pointer">Log Into Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;