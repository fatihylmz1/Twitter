import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import homeicon from "../Assets/icons/homefill.svg"
import explore from "../Assets/icons/explore.svg"
import notifications from "../Assets/icons/notification.svg"
import messages from "../Assets/icons/messages.svg"
import bookmarks from "../Assets/icons/bookmarks.svg"
import lists from "../Assets/icons/lists.svg"
import profile from "../Assets/icons/profileoutline.svg"
import more from "../Assets/icons/more.svg"

export const Navbar = () => {
    return (
        <div className="pl-[12rem] pt-12 flex flex-col justify-center gap-8 w-[30rem] max-w-[30rem]">
            <FontAwesomeIcon icon={faTwitter} className="text-[#1D9BF0] w-8 h-8" />

            <button className="flex flex-row gap-4 items-center">
                <img src={homeicon} />
                <p className="font-semibold">Home</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={explore} />
                <p className="font-semibold">Explore</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={notifications} />
                <p className="font-semibold">Notifications</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={messages} />
                <p className="font-semibold">Messages</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={bookmarks} />
                <p className="font-semibold">Bookmarks</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={lists} />
                <p className="font-semibold">Lists</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={profile} />
                <p className="font-semibold">Profile</p>
            </button>

            <button className="flex flex-row gap-4 items-center">
                <img src={more} />
                <p className="font-semibold">More</p>
            </button>

            <button className="bg-[#1D9BF0] text-white text-lg font-semibold border rounded-3xl w-[12rem] p-2 h-12">Tweet</button>

        </div>
    )
}