import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from "../Assets/icons/google-icon.svg"
import apple from "../Assets/icons/logo-apple.svg"
import React from "react";

export const Signup = () => {
    return (
        <div className="flex flex-col gap-0">
            <div className="flex flex-row gap-4">
                <div className="bg-signup h-[42.5rem] w-[60rem] bg-cover bg-no-repeat"></div>
                <div className="flex flex-col justify-between py-[5rem] px-8 gap-8">
                    <div className="flex flex-col justify-between gap-8">
                        <FontAwesomeIcon icon={faTwitter} className="text-[#1D9BF0] w-10 h-10" />
                        <p className="text-6xl font-bold text-black">Happening now</p>
                        <p className="text-4xl font-bold text-black">Join Twitter today</p>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-8">
                        <button className="flex flex-row gap-2 items-center">
                            <img src={google} />
                            <p className="font-semibold">Sign up with Google</p>
                        </button>
                        <button className="flex flex-row gap-2 items-center">
                            <img src={apple} />
                            <p className="font-semibold">Sign up with Apple</p>
                        </button>
                        <button className="font-semibold">Sign up with phone or email</button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="font-semibold">By singing up you agree to the Terms of Service and Privacy<br /> Policy, including Cookie Use.</p>
                        <div className="flex flex-row gap-2">
                            <p className="font-semibold">Already have an account?</p>
                            <button className="text-[#1D9BF0]">Log in</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" px-[6rem] py-3  flex flex-row gap-4 text-black font-semibold text-xs text-nowrap">
                <p>About</p>
                <p>Help Center</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Ads Info</p>
                <p>Blog</p>
                <p>Status</p>
                <p>Carres</p>
                <p>Brand Resources</p>
                <p>Advertsing</p>
                <p>Marketing</p>
                <p>Twitter for Business</p>
                <p>Developers</p>
                <p>Directory</p>
                <p>Settings</p>
                <p>© 2024 Twitter, Inc.</p>
            </div>
        </div>
    )
}