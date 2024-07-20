import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Login = () => {
    return (
        <div className="flex flex-col justify-between px-[32.5rem] pt-[3rem] pb-[15rem] gap-8">
            <FontAwesomeIcon icon={faTwitter} className="text-[#1D9BF0] w-12 h-12" />
            <p className="text-5xl font-bold">Log in to Twitter</p>
            <form className="flex flex-col gap-6">
                <label htmlFor="phone" >
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Phone or Email"
                    className="form-input w-full p-3 border border-solid bg-white border-gray-300 rounded-lg text-sm h-16"
                />
                <label htmlFor="password"></label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-input w-full p-3 border border-solid bg-white border-gray-300 rounded-lg text-sm h-16"
                />
            </form>
            <button className="w-[30rem] h-16 border rounded-[2rem] text-white font-bold text-lg bg-[#1D9BF0]">
                Log in
            </button>
            <div className="flex flex-row justify-between">
                <p className="text-[#1D9BF0] font-semibold">Forgot Password?</p>
                <button className="text-[#1D9BF0] font-semibold">Sign up to Twitter</button>
            </div>

        </div>
    )
}