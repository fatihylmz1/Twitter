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
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <div className="pl-[12rem] pt-12 flex flex-col justify-center gap-8 w-[30rem] max-w-[30rem]">
            <FontAwesomeIcon icon={faTwitter} className="text-[#1D9BF0] w-8 h-8" />
            <div className="flex flex-row gap-4">
                <img src={homeicon} />
                <p>Home</p>
            </div>

            <div className="flex flex-row gap-4">
                <img src={explore} />
                <p>Explore</p>
            </div>

            <div className="flex flex-row gap-4">
                <img src={notifications} />
                <p>Notifications</p>
            </div>
            <div className="flex flex-row gap-4">
                <img src={messages} />
                <p>Messages</p>
            </div>
            <div className="flex flex-row gap-4">
                <img src={bookmarks} />
                <p>Bookmarks</p>
            </div>
            <div className="flex flex-row gap-4">
                <img src={lists} />
                <p>Lists</p>
            </div>
            <div className="flex flex-row gap-4">
                <img src={profile} />
                <p>Profile</p>
            </div>
            <div className="flex flex-row gap-4">
                <img src={more} />
                <p>More</p>
            </div>

        </div>
    )
}