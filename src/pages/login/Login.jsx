import React from "react";

function Login() {
	return (
		<div className='login w-screen h-screen bg-[#f0f2f5] flex items-center justify-center'>
			<div className="loginWrapper w-[70%] h-[70%] flex">
				<div className="loginLeft flex-[1] flex flex-col justify-center">
					<h3 className="loginLogo text-[50px] font-extrabold text-rose-600 mb-2.5">BuzzyBuddies</h3>
					<span className="loginDesc text-[24px]">BuzzyBuddies is a lively and vibrant social media app that aims to connect people with shared interests and hobbies.</span>
				</div>
				<div className="loginRight flex-[1] flex flex-col justify-center">
					<div className="loginBox h-[300px] p-5 bg-white rounded-[10px] flex flex-col justify-between">
						<input type="email" placeholder="Email" className="loginInput h-[50px] rounded-[10px] border-[1px] border-solid border-gray-600 text-[18px] pl-5 focus:outline-none" />
						<input type="password" placeholder="Password" className="loginInput h-[50px] rounded-[10px] border-[1px] border-solid border-gray-600 text-[18px] pl-5 focus:outline-none" />
						<button className="loginButton h-[50px] rounded-[10px] border-none bg-rose-700 text-white text-[20px] font-medium cursor-pointer">log In</button>
						<span className="loginForgot text-center text-rose-700">Forgot Password?</span>
						<button className="loginRegisterButton w-[60%] self-center h-[50px] rounded-[10px] border-none bg-[#42b72a] text-white text-[20px] font-medium cursor-pointer">Create a New Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;